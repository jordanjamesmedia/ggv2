import { beforeAll, afterAll, afterEach, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { vi } from 'vitest';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Test directories
const dirs = {
  content: path.resolve(__dirname, '../src/content'),
  blog: path.resolve(__dirname, '../src/content/blog'),
  locations: path.resolve(__dirname, '../src/content/locations'),
  public: path.resolve(__dirname, '../public'),
  components: path.resolve(__dirname, '../src/components')
};

// Test content
const testContent = {
  blogPost: `---
title: Test Blog Post
description: Test description
date: 2024-01-20
author: Test Author
---

# Test Blog Post
Test content`,
  locationPage: `---
title: Test Location
description: Test description
area: Test Area
service_radius: 25
---

# Test Location
Test content`
};

// Mock the entire fs module
vi.mock('fs', () => ({
  default: {
    existsSync: vi.fn(),
    mkdirSync: vi.fn(),
    writeFileSync: vi.fn(),
    readFileSync: vi.fn(),
    unlinkSync: vi.fn(),
    statSync: vi.fn()
  }
}));

// Reset all mocks before each test
beforeEach(() => {
  vi.resetAllMocks();
});

// Create test directories and content
beforeAll(() => {
  // Create directories
  Object.values(dirs).forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  // Create test content
  fs.writeFileSync(
    path.join(dirs.blog, 'test-post.md'),
    testContent.blogPost,
    'utf-8'
  );
  fs.writeFileSync(
    path.join(dirs.locations, 'test-location.md'),
    testContent.locationPage,
    'utf-8'
  );

  // Create dummy component files
  const componentNames = ['Home', 'Services', 'About', 'Contact'];
  componentNames.forEach(name => {
    const componentDir = path.join(dirs.components, name);
    if (!fs.existsSync(componentDir)) {
      fs.mkdirSync(componentDir, { recursive: true });
      fs.writeFileSync(
        path.join(componentDir, 'index.tsx'),
        `export default function ${name}() { return null; }`
      );
    }
  });
});

// Clean up after each test
afterEach(() => {
  // Clean up sitemap.xml
  const sitemapPath = path.join(dirs.public, 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    try {
      fs.unlinkSync(sitemapPath);
    } catch (error) {
      console.warn('Could not delete sitemap.xml:', error);
    }
  }
});

// Clean up all test files after all tests
afterAll(() => {
  try {
    // Clean up test content
    if (fs.existsSync(dirs.content)) {
      fs.rmSync(dirs.content, { recursive: true, force: true });
    }

    // Clean up component directories
    const componentNames = ['Home', 'Services', 'About', 'Contact'];
    componentNames.forEach(name => {
      const componentDir = path.join(dirs.components, name);
      if (fs.existsSync(componentDir)) {
        fs.rmSync(componentDir, { recursive: true, force: true });
      }
    });
  } catch (error) {
    console.warn('Error cleaning up test files:', error);
  }
}); 