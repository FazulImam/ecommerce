#!/bin/bash

# Build optimization script for Node.js application

echo "Starting build optimization process..."

# Clean previous builds
echo "Cleaning previous builds..."
rm -rf node_modules package-lock.json dist build

# Install dependencies with specific flags for optimization
echo "Installing production dependencies..."
npm ci --only=production --no-optional --no-audit --no-fund

# Prune unnecessary packages
echo "Pruning unnecessary packages..."
npm prune --production

# Verify dependencies
echo "Verifying dependencies..."
npm ls --depth=0

# Run any build steps if needed
echo "Build optimization completed successfully!"
echo "Optimized files and dependencies are ready for deployment."