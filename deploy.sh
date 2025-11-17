#!/bin/bash

# GitHub Pages Deployment Script
# Usage: ./deploy.sh [repository-name]
# If no repository name is provided, it will use 'genetics-site' as default

REPO_NAME=${1:-genetics-site}

echo "🚀 Deploying to GitHub Pages..."
echo "📦 Repository name: $REPO_NAME"
echo ""

# Build with the correct base path
echo "📦 Building for production..."
VITE_BASE_PATH=/$REPO_NAME/ npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo ""
echo "📤 Deploying to gh-pages branch..."
npx gh-pages -d dist

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully deployed!"
    echo "🌐 Your site should be available at:"
    echo "   https://YOUR_USERNAME.github.io/$REPO_NAME/"
    echo ""
    echo "⚠️  Don't forget to:"
    echo "   1. Enable GitHub Pages in your repo settings"
    echo "   2. Set source to 'gh-pages' branch"
    echo "   3. Update YOUR_USERNAME in the URL above"
else
    echo "❌ Deployment failed!"
    exit 1
fi

