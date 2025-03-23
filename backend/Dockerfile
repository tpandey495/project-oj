FROM node:18-alpine

RUN apk update && apk add --no-cache \
    nodejs \
    g++\
    npm \
    make \
    bash

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npm install -g sequelize-cli

COPY . .

CMD ["sh", "-c", "sequelize db:migrate --env development && npm start"]
