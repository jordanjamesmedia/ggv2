import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { Stats } from 'fs';
import { XMLParser } from 'fast-xml-parser';

// Mock modules
vi.mock('fs', () => {
  const actual = vi.importActual('fs') as any;
  return {
    ...actual,
    existsSync: vi.fn(),
    mkdirSync: vi.fn(),
    writeFileSync: vi.fn(),
    statSync: vi.fn(),
    default: {
      existsSync: vi.fn(),
      mkdirSync: vi.fn(),
      writeFileSync: vi.fn(),
      statSync: vi.fn()
    }
  };
});

vi.mock('path', () => {
  const actual = vi.importActual('path') as any;
  return {
    ...actual,
    join: vi.fn((...args: string[]) => args.join('/')),
    resolve: vi.fn((...args: string[]) => args.join('/')),
    basename: vi.fn((p: string) => p.split('/').pop()),
    dirname: vi.fn((p: string) => p.split('/').slice(0, -1).join('/')),
    default: {
      join: vi.fn((...args: string[]) => args.join('/')),
      resolve: vi.fn((...args: string[]) => args.join('/')),
      basename: vi.fn((p: string) => p.split('/').pop()),
      dirname: vi.fn((p: string) => p.split('/').slice(0, -1).join('/'))
    }
  };
});

vi.mock('zlib', () => {
  const actual = vi.importActual('zlib') as any;
  return {
    ...actual,
    gzipSync: vi.fn((data: string | Buffer) => Buffer.from(data)),
    default: {
      gzipSync: vi.fn((data: string | Buffer) => Buffer.from(data))
    }
  };
});

// Mock route-scanner module
const mockScanRoutes = vi.fn();
vi.mock('../scripts/route-scanner.cjs', () => ({
  default: {
    scanRoutes: mockScanRoutes
  },
  scanRoutes: mockScanRoutes
}));

// Import modules after mocks
import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';
import { generateSitemap } from '../scripts/generate-sitemap.cjs';

describe('Sitemap Generator', () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const mockRoutes = [
    {
      path: '/',
      priority: 1.0,
      changefreq: 'weekly',
      lastmod: currentDate
    },
    {
      path: '/about',
      priority: 0.7,
      changefreq: 'monthly',
      lastmod: currentDate
    }
  ];

  beforeEach(() => {
    vi.resetAllMocks();
    mockScanRoutes.mockResolvedValue(mockRoutes);
    (fs.existsSync as any).mockReturnValue(true);
    (fs.mkdirSync as any).mockImplementation(() => undefined);
    (fs.writeFileSync as any).mockImplementation(() => undefined);
    (fs.statSync as any).mockReturnValue({
      size: 1000,
      mtime: new Date()
    } as Stats);

    // Mock path resolution
    (path.resolve as any).mockImplementation((...args: string[]) => args.join('/'));
    (path.join as any).mockImplementation((...args: string[]) => args.join('/'));
    (path.basename as any).mockImplementation((p: string) => p.split('/').pop());
    (path.dirname as any).mockImplementation((p: string) => p.split('/').slice(0, -1).join('/'));

    // Mock zlib compression
    (zlib.gzipSync as any).mockImplementation((data: string | Buffer) => Buffer.from(data));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should generate a valid sitemap XML file', async () => {
    await generateSitemap();

    expect(fs.writeFileSync).toHaveBeenCalledTimes(2); // Once for XML, once for gzip
    const xmlContent = (fs.writeFileSync as any).mock.calls[0][1] as string;

    // Verify XML declaration and root element
    expect(xmlContent).toMatch(/^<\?xml version="1\.0" encoding="UTF-8"\?>/);
    expect(xmlContent).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

    // Verify URL entries using string matching
    expect(xmlContent).toContain('<loc>https://guttergoat.com/</loc>');
    expect(xmlContent).toContain('<priority>1.0</priority>');
    expect(xmlContent).toContain('<changefreq>weekly</changefreq>');
    expect(xmlContent).toContain(`<lastmod>${currentDate}</lastmod>`);

    expect(xmlContent).toContain('<loc>https://guttergoat.com/about</loc>');
    expect(xmlContent).toContain('<priority>0.7</priority>');
    expect(xmlContent).toContain('<changefreq>monthly</changefreq>');

    // Parse XML to verify structure
    const parser = new XMLParser();
    const parsed = parser.parse(xmlContent);
    expect(parsed.urlset.url).toBeDefined();
    expect(Array.isArray(parsed.urlset.url)).toBe(true);
    expect(parsed.urlset.url).toHaveLength(2);
  });

  it('should create the public directory if it does not exist', async () => {
    (fs.existsSync as any).mockReturnValue(false);

    await generateSitemap();

    expect(fs.mkdirSync).toHaveBeenCalledWith(
      expect.stringContaining('public'),
      { recursive: true }
    );
  });

  it('should handle errors during sitemap generation', async () => {
    mockScanRoutes.mockRejectedValue(new Error('Failed to scan routes'));

    await expect(generateSitemap()).rejects.toThrow('Failed to scan routes');
  });

  it('should properly escape special characters in URLs', async () => {
    mockScanRoutes.mockResolvedValue([
      {
        path: '/blog/post&with<>special"chars',
        priority: 0.7,
        changefreq: 'monthly',
        lastmod: currentDate
      }
    ]);

    await generateSitemap();

    const xmlContent = (fs.writeFileSync as any).mock.calls[0][1] as string;
    expect(xmlContent).toContain('&amp;');
    expect(xmlContent).toContain('&lt;');
    expect(xmlContent).toContain('&gt;');
    expect(xmlContent).toContain('&quot;');
  });

  it('should handle empty route list gracefully', async () => {
    mockScanRoutes.mockResolvedValue([]);

    await generateSitemap();

    const xmlContent = (fs.writeFileSync as any).mock.calls[0][1] as string;
    expect(xmlContent).toContain('<urlset');
    expect(xmlContent).toContain('</urlset>');

    const parser = new XMLParser();
    const parsed = parser.parse(xmlContent);
    expect(parsed.urlset.url).toBeUndefined();
  });

  it('should handle file system write errors', async () => {
    (fs.writeFileSync as any).mockImplementation(() => {
      throw new Error('Write permission denied');
    });

    await expect(generateSitemap()).rejects.toThrow('Write permission denied');
  });

  it('should validate priority ranges', async () => {
    const invalidRoutes = [
      {
        path: '/invalid',
        priority: 1.5, // Invalid priority > 1.0
        changefreq: 'weekly',
        lastmod: currentDate
      }
    ];
    mockScanRoutes.mockResolvedValue(invalidRoutes);

    await expect(generateSitemap()).rejects.toThrow(/Invalid priority/);
  });
}); 