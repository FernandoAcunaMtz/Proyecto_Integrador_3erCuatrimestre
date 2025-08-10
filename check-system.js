#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando sistema para Lumina Learning...\n');

// Verificar Node.js
try {
    const nodeVersion = process.version;
    console.log(`✅ Node.js: ${nodeVersion}`);
    
    // Verificar versión mínima
    const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
    if (majorVersion < 14) {
        console.log('⚠️  Advertencia: Se recomienda Node.js 14.x o superior');
    }
} catch (error) {
    console.log('❌ Error: Node.js no está instalado');
    process.exit(1);
}

// Verificar npm
try {
    const npmVersion = require('child_process').execSync('npm --version', { encoding: 'utf8' }).trim();
    console.log(`✅ npm: ${npmVersion}`);
} catch (error) {
    console.log('❌ Error: npm no está disponible');
    process.exit(1);
}

// Verificar archivos del proyecto
const requiredFiles = [
    'package.json',
    'chatbot-server.js',
    'index.html',
    'js/chatbot.js',
    'styles/chatbot.css'
];

console.log('\n📁 Verificando archivos del proyecto...');
let allFilesPresent = true;

requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✅ ${file}`);
    } else {
        console.log(`❌ ${file} - FALTANTE`);
        allFilesPresent = false;
    }
});

if (!allFilesPresent) {
    console.log('\n❌ Faltan archivos requeridos. Verifica que todos los archivos estén presentes.');
    process.exit(1);
}

// Verificar dependencias
console.log('\n📦 Verificando dependencias...');
if (fs.existsSync('node_modules')) {
    console.log('✅ node_modules encontrado');
} else {
    console.log('⚠️  node_modules no encontrado. Ejecuta: npm install');
}

// Verificar puertos
console.log('\n🌐 Verificando puertos...');
const net = require('net');

function checkPort(port) {
    return new Promise((resolve) => {
        const server = net.createServer();
        server.listen(port, () => {
            server.close();
            resolve(true);
        });
        server.on('error', () => {
            resolve(false);
        });
    });
}

async function checkPorts() {
    const port5501 = await checkPort(5501);
    const port5503 = await checkPort(5503);
    
    if (port5501) {
        console.log('✅ Puerto 5501 disponible');
    } else {
        console.log('⚠️  Puerto 5501 en uso (posiblemente VS Code Live Server)');
    }
    
    if (port5503) {
        console.log('✅ Puerto 5503 disponible');
    } else {
        console.log('❌ Puerto 5503 en uso');
    }
}

checkPorts().then(() => {
    console.log('\n🎉 Verificación completada!');
    console.log('\n📋 Próximos pasos:');
    console.log('1. Ejecuta: npm install (si no lo has hecho)');
    console.log('2. Ejecuta: node chatbot-server.js');
    console.log('3. Abre tu página principal en el navegador');
    console.log('\n¡Tu chatbot debería funcionar perfectamente! 🤖✨');
});
