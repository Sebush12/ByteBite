FROM node:18.18.0

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /bytebite-web

COPY . .

RUN yarn install

RUN yarn add -d next@latest

EXPOSE 3000

CMD ["yarn", "start"]
