FROM node:16

RUN mkdir -p /src/user/app

WORKDIR /src/user/app

COPY package*json ./

COPY . .

RUN npm install

RUN rm -rf dist

RUN npx tsc

EXPOSE 3000

CMD ["node", "dist/src/main.js"]