#!/bin/bash

# Deployment Script for Gaurav Dhakal Portfolio
# This script automates the build and deployment process

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

print_success "Node.js version check passed: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

# Clean previous builds
print_status "Cleaning previous builds..."
rm -rf .next out
print_success "Clean completed"

# Install dependencies
print_status "Installing dependencies..."
npm ci --only=production
print_success "Dependencies installed"

# Run type checking
print_status "Running TypeScript type checking..."
npm run type-check
print_success "Type checking passed"

# Run linting
print_status "Running ESLint..."
npm run lint
print_success "Linting passed"

# Build the project
print_status "Building the project..."
npm run build
print_success "Build completed successfully"

# Check if out directory exists
if [ ! -d "out" ]; then
    print_error "Build failed: out directory not found"
    exit 1
fi

print_success "Static export created in 'out' directory"

# Display build information
print_status "Build Information:"
echo "  - Total files: $(find out -type f | wc -l)"
echo "  - Total size: $(du -sh out | cut -f1)"
echo "  - Main page: $(ls -lh out/index.html | awk '{print $5}')"

# Check for common deployment files
print_status "Checking deployment configuration..."

if [ -f "vercel.json" ]; then
    print_success "Vercel configuration found"
fi

if [ -f "netlify.toml" ]; then
    print_success "Netlify configuration found"
fi

if [ -f "Dockerfile" ]; then
    print_success "Docker configuration found"
fi

# Deployment options
echo ""
print_status "Deployment Options:"
echo "1. Vercel (Recommended)"
echo "2. Netlify"
echo "3. Docker"
echo "4. Static hosting (manual upload)"
echo "5. Test locally"

read -p "Choose deployment option (1-5): " choice

case $choice in
    1)
        print_status "Deploying to Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            print_warning "Vercel CLI not installed. Please install it with: npm i -g vercel"
            print_status "You can also deploy by pushing to GitHub and connecting to Vercel dashboard"
        fi
        ;;
    2)
        print_status "Deploying to Netlify..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=out
        else
            print_warning "Netlify CLI not installed. Please install it with: npm i -g netlify-cli"
            print_status "You can also deploy by uploading the 'out' folder to Netlify dashboard"
        fi
        ;;
    3)
        print_status "Building Docker image..."
        if command -v docker &> /dev/null; then
            docker build -t my-portfolio .
            print_success "Docker image built successfully"
            print_status "To run: docker run -p 3000:3000 my-portfolio"
        else
            print_error "Docker is not installed"
        fi
        ;;
    4)
        print_status "Static hosting deployment"
        print_success "Your static files are ready in the 'out' directory"
        print_status "Upload the contents of the 'out' folder to your hosting provider"
        ;;
    5)
        print_status "Testing locally..."
        if command -v serve &> /dev/null; then
            serve out -p 3000
        else
            print_warning "Serve not installed. Installing..."
            npm install -g serve
            serve out -p 3000
        fi
        ;;
    *)
        print_error "Invalid option"
        exit 1
        ;;
esac

print_success "Deployment process completed!"
print_status "Next steps:"
echo "  - Test your deployed site"
echo "  - Configure custom domain (if applicable)"
echo "  - Set up monitoring and analytics"
echo "  - Update environment variables in production"
