FROM nginx
WORKDIR /root/
COPY ./dist /app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
