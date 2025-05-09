#!/bin/bash
# Custom build script for Vercel

# Navigate to the project directory
cd "$(dirname "$0")"

# Install dependencies
npm install

# Build the project
npm run build

# Copy files to ensure SPA routing works
cp dist/index.html dist/404.html

echo "Build completed successfully!" 