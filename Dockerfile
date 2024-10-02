# Используем базовый образ для Node.js
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы
COPY . .

# Устанавливаем переменную окружения для Nuxt
ENV HOST 0.0.0.0
ENV PORT 3000

# Запускаем приложение
CMD ["npm", "run", "dev"]
