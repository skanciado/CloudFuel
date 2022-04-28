# Stage 1 Docker
FROM nginx:1.17.1-alpine
COPY /nginx-hosting/nginx2.conf /etc/nginx/nginx.conf
COPY /www /usr/share/nginx/html