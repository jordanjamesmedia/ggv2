import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { Stats } from 'fs';

// Mock modules
vi.mock('fs', () => {
  const actual = vi.importActual('fs') as any;
  return {
    ...actual,
    existsSync: vi.fn(),
    readdirSync: vi.fn(),
    statSync: vi.fn(),
    default: {
      existsSync: vi.fn(),
      readdirSync: vi.fn(),
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
    relative: vi.fn((from: string, to: string) => {
      const fromParts = from.split('/');
      const toParts = to.split('/');
      const relativeParts = toParts.slice(fromParts.length);
      return relativeParts.join('/');
    }),
    default: {
      join: vi.fn((...args: string[]) => args.join('/')),
      resolve: vi.fn((...args: string[]) => args.join('/')),
      basename: vi.fn((p: string) => p.split('/').pop()),
      dirname: vi.fn((p: string) => p.split('/').slice(0, -1).join('/'))
    }
  };
});

// Import modules after mocks
import * as fs from 'fs';
import * as path from 'path';
import { scanRoutes } from '../scripts/route-scanner.cjs';

describe('Route Scanner', () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const mockFiles = {
    'src/components/Home/index.tsx': '',
    'src/components/Services/index.tsx': '',
    'src/components/About/index.tsx': '',
    'src/components/Privacy/index.tsx': '',
    'src/content/blog/test-post.md': '',
    'src/content/blog/post1.md': '',
    'src/content/blog/post2.mdx': '',
    'src/content/blog/invalid.txt': '',
    'src/content/blog/test-post-with spaces.md': '',
    'src/content/blog/café-review.md': '',
    'src/content/blog/中文-post.md': '',
    'src/content/blog/über-service.md': '',
    'src/content/blog/post&with&ampersands.md': '',
    'src/content/blog/post<with>brackets.md': '',
    'src/content/blog/post"with\'quotes.md': '',
    'src/content/blog/2024/nested-post.md': '',
    'src/content/blog/2024/january/deep-post.md': '',
    'src/content/locations/test-location.md': ''
  };

  beforeEach(() => {
    vi.resetAllMocks();

    // Mock file existence checks
    (fs.existsSync as any).mockImplementation((filePath: string) => {
      const normalizedPath = filePath.replace(/\\/g, '/');
      return Object.keys(mockFiles).some(mockPath => 
        normalizedPath.endsWith(mockPath) ||
        normalizedPath.endsWith('components') ||
        normalizedPath.endsWith('content') ||
        normalizedPath.endsWith('blog') ||
        normalizedPath.endsWith('locations') ||
        normalizedPath.endsWith('2024') ||
        normalizedPath.endsWith('january')
      );
    });

    // Mock directory reading
    (fs.readdirSync as any).mockImplementation((dirPath: string) => {
      const normalizedPath = dirPath.replace(/\\/g, '/');
      if (normalizedPath.endsWith('components')) {
        return ['Home', 'Services', 'About', 'Privacy'];
      }
      if (normalizedPath.endsWith('blog')) {
        return [
          'test-post.md',
          'post1.md',
          'post2.mdx',
          'invalid.txt',
          'test-post-with spaces.md',
          'café-review.md',
          '中文-post.md',
          'über-service.md',
          'post&with&ampersands.md',
          'post<with>brackets.md',
          'post"with\'quotes.md',
          '2024'
        ];
      }
      if (normalizedPath.endsWith('locations')) {
        return ['test-location.md'];
      }
      if (normalizedPath.endsWith('2024')) {
        return ['nested-post.md', 'january'];
      }
      if (normalizedPath.endsWith('january')) {
        return ['deep-post.md'];
      }
      if (normalizedPath.includes('test-large-number')) {
        return Array.from({ length: 1000 }, (_, i) => `post-${i}.md`);
      }
      return [];
    });

    // Mock file stats
    (fs.statSync as any).mockImplementation((filePath: string) => ({
      mtime: new Date(),
      isDirectory: () => {
        const normalizedPath = filePath.replace(/\\/g, '/');
        return normalizedPath.endsWith('2024') || 
               normalizedPath.endsWith('january') ||
               normalizedPath.endsWith('test-large-number');
      },
      isFile: () => {
        const normalizedPath = filePath.replace(/\\/g, '/');
        return Object.keys(mockFiles).some(mockPath => normalizedPath.endsWith(mockPath)) ||
               normalizedPath.match(/post-\d+\.md$/);
      }
    } as Stats));

    // Mock path resolution
    (path.resolve as any).mockImplementation((...args: string[]) => args.join('/'));
    (path.join as any).mockImplementation((...args: string[]) => args.join('/'));
    (path.basename as any).mockImplementation((p: string) => p.split('/').pop());
    (path.dirname as any).mockImplementation((p: string) => p.split('/').slice(0, -1).join('/'));
    (path.relative as any).mockImplementation((from: string, to: string) => {
      const fromParts = from.split('/');
      const toParts = to.split('/');
      const relativeParts = toParts.slice(fromParts.length);
      return relativeParts.join('/');
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should detect static routes', async () => {
    const routes = await scanRoutes();
    const homeRoute = routes.find(r => r.path === '/');

    expect(homeRoute).toBeDefined();
    expect(homeRoute?.priority).toBe(1.0);
    expect(homeRoute?.changefreq).toBe('weekly');
    expect(homeRoute?.lastmod).toBe(currentDate);
  });

  it('should detect blog posts', async () => {
    const routes = await scanRoutes();
    const blogRoute = routes.find(r => r.path === '/blog/test-post');

    expect(blogRoute).toBeDefined();
    expect(blogRoute?.priority).toBe(0.7);
    expect(blogRoute?.changefreq).toBe('monthly');
    expect(blogRoute?.lastmod).toBe(currentDate);
  });

  it('should detect location pages', async () => {
    const routes = await scanRoutes();
    const locationRoute = routes.find(r => r.path === '/locations/test-location');

    expect(locationRoute).toBeDefined();
    expect(locationRoute?.priority).toBe(0.8);
    expect(locationRoute?.changefreq).toBe('monthly');
    expect(locationRoute?.lastmod).toBe(currentDate);
  });

  it('should include last modification dates', async () => {
    const routes = await scanRoutes();
    const homeRoute = routes.find(r => r.path === '/');

    expect(homeRoute?.lastmod).toBe(currentDate);
  });

  it('should handle missing content directories gracefully', async () => {
    // Mock fs.existsSync to return false for content directories
    fs.existsSync.mockImplementation((filePath: string) => {
      return filePath.includes('components') && !filePath.includes('content');
    });

    // Mock readdirSync to only return component files
    fs.readdirSync.mockImplementation((dirPath: string) => {
      if (dirPath.includes('components')) {
        return ['Home', 'Services', 'About', 'Privacy'].map(name => `${name}/index.tsx`);
      }
      return [];
    });

    const routes = await scanRoutes();
    
    // Should still include static routes
    expect(routes.some(r => r.path === '/')).toBe(true);
    expect(routes.some(r => r.path === '/about')).toBe(true);
    
    // Should not include dynamic routes
    expect(routes.some(r => r.path.startsWith('/blog/'))).toBe(false);
    expect(routes.some(r => r.path.startsWith('/locations/'))).toBe(false);
  });

  it('should handle files with different extensions', async () => {
    fs.readdirSync.mockImplementation((dirPath: string) => {
      if (dirPath.includes('components')) {
        return ['Home', 'Services', 'About', 'Privacy'].map(name => `${name}/index.tsx`);
      }
      if (dirPath.includes('blog')) {
        return ['post1.md', 'post2.mdx', 'invalid.txt'];
      }
      return [];
    });

    const routes = await scanRoutes();
    const mdPost = routes.find(r => r.path === '/blog/post1');
    const mdxPost = routes.find(r => r.path === '/blog/post2');
    const invalidPost = routes.find(r => r.path === '/blog/invalid');

    expect(mdPost).toBeDefined();
    expect(mdxPost).toBeDefined();
    expect(invalidPost).toBeUndefined();
  });

  it('should handle nested content directories', async () => {
    fs.readdirSync.mockImplementation((dirPath: string) => {
      if (dirPath.includes('components')) {
        return ['Home', 'Services', 'About', 'Privacy'].map(name => `${name}/index.tsx`);
      }
      if (dirPath.includes('blog')) {
        return ['2024', 'test-post.md'];
      }
      if (dirPath.includes('2024')) {
        return ['january', 'nested-post.md'];
      }
      if (dirPath.includes('january')) {
        return ['deep-post.md'];
      }
      return [];
    });

    fs.statSync.mockImplementation((filePath: string) => ({
      mtime: new Date(),
      isDirectory: () => {
        if (filePath.endsWith('index.tsx')) return false;
        if (filePath.endsWith('.md')) return false;
        if (filePath.endsWith('.mdx')) return false;
        return filePath.includes('2024') || filePath.includes('january');
      },
      isFile: () => {
        return filePath.endsWith('.md') || filePath.endsWith('.mdx') || filePath.endsWith('.tsx');
      }
    } as fs.Stats));

    const routes = await scanRoutes();
    
    expect(routes.find(r => r.path === '/blog/test-post')).toBeDefined();
    expect(routes.find(r => r.path === '/blog/nested-post')).toBeDefined();
    expect(routes.find(r => r.path === '/blog/deep-post')).toBeDefined();
  });

  it('should handle file stat errors gracefully', async () => {
    fs.statSync.mockImplementation(() => {
      throw new Error('Permission denied');
    });

    const routes = await scanRoutes();
    const homeRoute = routes.find(r => r.path === '/');

    expect(homeRoute).toBeDefined();
    expect(homeRoute?.lastmod).toBe(currentDate);
  });

  it('should normalize paths correctly', async () => {
    fs.readdirSync.mockImplementation((dirPath: string) => {
      if (dirPath.includes('components')) {
        return ['Home', 'Services', 'About', 'Privacy'].map(name => `${name}/index.tsx`);
      }
      if (dirPath.includes('blog')) {
        return ['test-post-with spaces.md'];
      }
      return [];
    });

    const routes = await scanRoutes();
    const blogRoute = routes.find(r => r.path.includes('test-post-with'));

    expect(blogRoute?.path).toBe('/blog/test-post-with spaces');
  });

  it('should handle readdir errors gracefully', async () => {
    fs.readdirSync.mockImplementation(() => {
      throw new Error('Permission denied');
    });

    const routes = await scanRoutes();
    
    // Should still include static routes
    expect(routes.some(r => r.path === '/')).toBe(true);
    expect(routes.length).toBeGreaterThan(0);
  });

  it('should handle duplicate routes', async () => {
    fs.readdirSync.mockImplementation((dirPath: string) => {
      if (dirPath.includes('components')) {
        return ['Home', 'Services', 'About', 'Privacy'].map(name => `${name}/index.tsx`);
      }
      if (dirPath.includes('blog')) {
        return ['test-post.md', 'test-post.mdx'];
      }
      return [];
    });

    const routes = await scanRoutes();
    const duplicateRoutes = routes.filter(r => r.path === '/blog/test-post');

    expect(duplicateRoutes).toHaveLength(1);
  });

  it('should handle non-ASCII characters in filenames', async () => {
    fs.readdirSync.mockImplementation((dirPath) => {
      const normalizedPath = dirPath.replace(/\\/g, '/');
      if (normalizedPath.endsWith('blog')) {
        return ['café-review.md', '中文-post.md', 'über-service.md'];
      }
      return [];
    });

    const routes = await scanRoutes();
    
    expect(routes.find(r => r.path === '/blog/café-review')).toBeDefined();
    expect(routes.find(r => r.path === '/blog/中文-post')).toBeDefined();
    expect(routes.find(r => r.path === '/blog/über-service')).toBeDefined();
  });

  it('should handle large numbers of routes', async () => {
    // Generate 1000 blog posts
    const blogPosts = Array.from({ length: 1000 }, (_, i) => `post-${i}.md`);
    
    fs.readdirSync.mockImplementation((dirPath) => {
      const normalizedPath = dirPath.replace(/\\/g, '/');
      if (normalizedPath.endsWith('blog')) {
        return blogPosts;
      }
      return [];
    });

    const routes = await scanRoutes();
    expect(routes.length).toBeGreaterThanOrEqual(1000);
    expect(routes[999].path).toBe('/blog/post-999');
  });

  it('should handle malformed file paths', async () => {
    fs.readdirSync.mockImplementation((dirPath) => {
      const normalizedPath = dirPath.replace(/\\/g, '/');
      if (normalizedPath.endsWith('blog')) {
        return [
          '../attempt-directory-traversal.md',
          './current-directory.md',
          'normal-post.md',
          'post//with//double//slashes.md',
          'post with..multiple...dots.md',
          ' leading-space.md',
          'trailing-space.md '
        ];
      }
      return [];
    });

    const routes = await scanRoutes();
    
    // Should sanitize paths
    expect(routes.find(r => r.path.includes('..'))).toBeUndefined();
    expect(routes.find(r => r.path.includes('./'))).toBeUndefined();
    expect(routes.find(r => r.path.includes('//'))).toBeUndefined();
    expect(routes.find(r => r.path === '/blog/normal-post')).toBeDefined();
    expect(routes.find(r => r.path === '/blog/post with..multiple...dots')).toBeDefined();
    expect(routes.find(r => r.path === '/blog/leading-space')).toBeDefined();
    expect(routes.find(r => r.path === '/blog/trailing-space')).toBeDefined();
  });

  it('should handle special XML characters in paths', async () => {
    fs.readdirSync.mockImplementation((dirPath) => {
      const normalizedPath = dirPath.replace(/\\/g, '/');
      if (normalizedPath.endsWith('blog')) {
        return [
          'post&with&ampersands.md',
          'post<with>brackets.md',
          'post"with\'quotes.md'
        ];
      }
      return [];
    });

    const routes = await scanRoutes();
    
    expect(routes.find(r => r.path === '/blog/post&with&ampersands')).toBeDefined();
    expect(routes.find(r => r.path === '/blog/post<with>brackets')).toBeDefined();
    expect(routes.find(r => r.path === '/blog/post"with\'quotes')).toBeDefined();
  });
}); 