#!/bin/bash

echo "========================================"
echo "   LUMINA LEARNING - CHATBOT SETUP"
echo "========================================"
echo

echo "Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js no está instalado"
    echo "Por favor instala Node.js desde: https://nodejs.org/"
    exit 1
fi

echo "Node.js encontrado ✓"
echo

echo "Instalando dependencias..."
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: No se pudieron instalar las dependencias"
    exit 1
fi

echo "Dependencias instaladas ✓"
echo

echo "Iniciando servidor del chatbot..."
echo "El chatbot estará disponible en: http://localhost:5503"
echo
echo "Para detener el servidor, presiona Ctrl+C"
echo

node chatbot-server.js
