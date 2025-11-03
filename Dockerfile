FROM node:18-alpine

WORKDIR /app

# Install git and other build dependencies
RUN apk add --no-cache git python3 make g++

COPY package.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]
