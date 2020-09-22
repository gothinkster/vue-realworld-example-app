FROM node:lts-alpine

WORKDIR /app

COPY . /app/

RUN yarn install

CMD ["yarn", "serve"]
