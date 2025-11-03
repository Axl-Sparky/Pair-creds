FROM node:lts-buster

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD ["node", "index.js"]
