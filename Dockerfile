# Usa una imagen base con Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Expone el puerto que Vite usará por defecto
EXPOSE 5173

# Comando por defecto para ejecutar la aplicación en modo desarrollo
CMD ["npm", "run", "dev", "--", "--host"]
