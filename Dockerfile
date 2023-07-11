FROM node:14-alpine as build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM nginx:1.21-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
