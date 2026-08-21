@echo off
cd /d "%~dp0"

if not exist ".deployment-id" (
  echo No existe .deployment-id con el deploymentId.
  echo Corre una vez: npx clasp deployments
  echo y guarda el ID en un archivo llamado .deployment-id
  pause
  exit /b 1
)

set /p DEPLOYMENT_ID=<.deployment-id

echo Subiendo codigo (clasp push)...
call npx clasp push --force
if errorlevel 1 goto :error

echo.
echo Publicando en el deployment %DEPLOYMENT_ID%...
call npx clasp deploy --deploymentId %DEPLOYMENT_ID% --description "Actualizacion automatica"
if errorlevel 1 goto :error

echo.
echo Listo. Revisa tu link de Apps Script.
pause
exit /b 0

:error
echo.
echo Hubo un error. Revisa el mensaje de arriba.
pause
exit /b 1
