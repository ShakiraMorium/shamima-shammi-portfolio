@echo off
title Deploy Shamima Shammi Portfolio to Vercel
echo =======================================================
echo   Deploying Shamima Shammi Portfolio to Vercel
echo =======================================================
echo.
echo Step 1: Building production bundle...
call npm run build
echo.
echo Step 2: Deploying to Vercel Production...
call npx vercel --prod
echo.
echo Deployment finished! Check the URL above to view your live portfolio.
pause
