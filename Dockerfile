FROM nginx:1.27.2

COPY ./dist /data/www/dist/
COPY index.html /data/www/
COPY app.js /data/www/
COPY devops-nginx.conf /etc/nginx/conf.d/devops-nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
