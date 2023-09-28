FROM node:18.18.0

WORKDIR /bytebite-web

RUN command -v yarn || npm i -g yarn

COPY . .

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]
