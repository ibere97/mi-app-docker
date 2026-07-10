FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN corepack enable
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]