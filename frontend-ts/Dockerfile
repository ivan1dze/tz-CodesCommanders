# Используем официальный образ Node.js как базовый
FROM node:18 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в рабочую директорию
COPY . .

# Собираем проект
RUN npm run build

# Используем nginx для сервировки статики
FROM nginx:alpine

# Копируем собранные файлы из предыдущего образа
COPY --from=build /app/build /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80 для Nginx
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
