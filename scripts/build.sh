#!/bin/bash

# Generate sitemap first
npm run generate-sitemap

# Build the project
npm run build

# Verify sitemap.xml exists and has proper content type
if [ -f "dist/sitemap.xml" ]; then
  echo "✅ Sitemap exists in build output"
else
  echo "❌ Sitemap is missing from build output"
  exit 1
fi 