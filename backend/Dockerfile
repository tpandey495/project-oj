FROM node:18-alpine

RUN apk update && apk add --no-cache \
    nodejs \
    npm \
    g++ \
    make \
    bash

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD [ "node", "index.js" ]