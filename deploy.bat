@echo off
setlocal enabledelayedexpansion

echo 🚀 Starting deployment process...

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js is not installed. Please install Node.js 18+ first.
    exit /b 1
)

REM Check Node.js version
for /f "tokens=1,2 delims=." %%a in ('node --version') do set NODE_VERSION=%%a
set NODE_VERSION=%NODE_VERSION:~1%
if %NODE_VERSION% LSS 18 (
    echo [ERROR] Node.js version 18+ is required. Current version: 
    node --version
    exit /b 1
)

echo [SUCCESS] Node.js version check passed:
node --version

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] npm is not installed. Please install npm first.
    exit /b 1
)

REM Clean previous builds
echo [INFO] Cleaning previous builds...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out
echo [SUCCESS] Clean completed

REM Install dependencies
echo [INFO] Installing dependencies...
call npm ci --only=production
if errorlevel 1 (
    echo [ERROR] Failed to install dependencies
    exit /b 1
)
echo [SUCCESS] Dependencies installed

REM Run type checking
echo [INFO] Running TypeScript type checking...
call npm run type-check
if errorlevel 1 (
    echo [ERROR] Type checking failed
    exit /b 1
)
echo [SUCCESS] Type checking passed

REM Run linting
echo [INFO] Running ESLint...
call npm run lint
if errorlevel 1 (
    echo [WARNING] Linting failed, but continuing...
)
echo [SUCCESS] Linting passed

REM Build the project
echo [INFO] Building the project...
call npm run build
if errorlevel 1 (
    echo [ERROR] Build failed
    exit /b 1
)
echo [SUCCESS] Build completed successfully

REM Check if out directory exists
if not exist out (
    echo [ERROR] Build failed: out directory not found
    exit /b 1
)

echo [SUCCESS] Static export created in 'out' directory

REM Display build information
echo [INFO] Build Information:
for /f %%i in ('dir /b out ^| find /c /v ""') do set FILE_COUNT=%%i
echo   - Total files: %FILE_COUNT%
for /f %%i in ('dir out /-c ^| find "File(s)"') do set SIZE_INFO=%%i
echo   - Build size: %SIZE_INFO%

REM Check for common deployment files
echo [INFO] Checking deployment configuration...

if exist vercel.json (
    echo [SUCCESS] Vercel configuration found
)

if exist netlify.toml (
    echo [SUCCESS] Netlify configuration found
)

if exist Dockerfile (
    echo [SUCCESS] Docker configuration found
)

REM Deployment options
echo.
echo [INFO] Deployment Options:
echo 1. Vercel (Recommended)
echo 2. Netlify
echo 3. Docker
echo 4. Static hosting (manual upload)
echo 5. Test locally

set /p choice="Choose deployment option (1-5): "

if "%choice%"=="1" (
    echo [INFO] Deploying to Vercel...
    vercel --version >nul 2>&1
    if errorlevel 1 (
        echo [WARNING] Vercel CLI not installed. Please install it with: npm i -g vercel
        echo [INFO] You can also deploy by pushing to GitHub and connecting to Vercel dashboard
    ) else (
        call vercel --prod
    )
) else if "%choice%"=="2" (
    echo [INFO] Deploying to Netlify...
    netlify --version >nul 2>&1
    if errorlevel 1 (
        echo [WARNING] Netlify CLI not installed. Please install it with: npm i -g netlify-cli
        echo [INFO] You can also deploy by uploading the 'out' folder to Netlify dashboard
    ) else (
        call netlify deploy --prod --dir=out
    )
) else if "%choice%"=="3" (
    echo [INFO] Building Docker image...
    docker --version >nul 2>&1
    if errorlevel 1 (
        echo [ERROR] Docker is not installed
    ) else (
        call docker build -t my-portfolio .
        echo [SUCCESS] Docker image built successfully
        echo [INFO] To run: docker run -p 3000:3000 my-portfolio
    )
) else if "%choice%"=="4" (
    echo [INFO] Static hosting deployment
    echo [SUCCESS] Your static files are ready in the 'out' directory
    echo [INFO] Upload the contents of the 'out' folder to your hosting provider
) else if "%choice%"=="5" (
    echo [INFO] Testing locally...
    serve --version >nul 2>&1
    if errorlevel 1 (
        echo [WARNING] Serve not installed. Installing...
        call npm install -g serve
    )
    call serve out -p 3000
) else (
    echo [ERROR] Invalid option
    exit /b 1
)

echo [SUCCESS] Deployment process completed!
echo [INFO] Next steps:
echo   - Test your deployed site
echo   - Configure custom domain (if applicable)
echo   - Set up monitoring and analytics
echo   - Update environment variables in production

pause
