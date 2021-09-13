FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]
