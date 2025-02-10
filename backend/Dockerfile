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

RUN npm install -g sequelize-cli

COPY . .

EXPOSE 9000

COPY start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

ENTRYPOINT ["start.sh"]
