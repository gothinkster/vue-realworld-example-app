FROM node

WORKDIR /app

COPY package-lock.json package.json yarn.lock ./

RUN yarn install
