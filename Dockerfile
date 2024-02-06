FROM nginx:1.24.0-alpine-slim

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist /usr/share/nginx/html
EXPOSE 80 8000

