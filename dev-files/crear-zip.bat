@echo off
echo ========================================
echo    CREANDO ZIP DEL PROYECTO
echo ========================================
echo.

echo Limpiando archivos temporales...
if exist "lumina-learning-portable.zip" del "lumina-learning-portable.zip"

echo Creando archivo ZIP...
powershell -command "Compress-Archive -Path 'index.html', 'js', 'styles', 'chatbot-server.js', 'package.json', 'start-chatbot.bat', 'start-chatbot.sh', 'check-system.js', 'config.js', 'INSTALACION_CHATBOT.md', 'EXPORTAR_PROYECTO.md', '.gitignore' -DestinationPath 'lumina-learning-portable.zip' -Force"

if exist "lumina-learning-portable.zip" (
    echo.
    echo ✅ ZIP creado exitosamente: lumina-learning-portable.zip
    echo.
    echo 📋 Archivos incluidos:
    echo    - index.html
    echo    - js/chatbot.js
    echo    - styles/chatbot.css
    echo    - chatbot-server.js
    echo    - package.json
    echo    - start-chatbot.bat (Windows)
    echo    - start-chatbot.sh (macOS/Linux)
    echo    - check-system.js
    echo    - config.js
    echo    - INSTALACION_CHATBOT.md
    echo    - EXPORTAR_PROYECTO.md
    echo    - .gitignore
    echo.
    echo 🚀 Tu proyecto está listo para exportar!
    echo 📁 Tamaño del archivo: 
    for %%A in (lumina-learning-portable.zip) do echo    %%~zA bytes
) else (
    echo ❌ Error al crear el ZIP
)

echo.
pause
