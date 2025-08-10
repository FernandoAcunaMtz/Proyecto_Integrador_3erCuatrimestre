@echo off
echo ========================================
echo    LUMINA LEARNING - CHATBOT SETUP
echo ========================================
echo.

echo Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js no está instalado
    echo Por favor instala Node.js desde: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js encontrado ✓
echo.

echo Instalando dependencias...
npm install
if %errorlevel% neq 0 (
    echo ERROR: No se pudieron instalar las dependencias
    pause
    exit /b 1
)

echo Dependencias instaladas ✓
echo.

echo Iniciando servidor del chatbot...
echo El chatbot estará disponible en: http://localhost:5503
echo.
echo Para detener el servidor, presiona Ctrl+C
echo.

node chatbot-server.js
