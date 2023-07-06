# Usa la imagen base de Debian
FROM debian:latest

# Actualiza el sistema e instala las dependencias necesarias
RUN apt-get update && apt-get install -y \
    curl \
    gnupg

# Instala la última versión de Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g npm@latest
RUN npm install -g create-react-app@latest