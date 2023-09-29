FROM node:18.18.0

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /bytebite-web

COPY package.json yarn.lock ./
RUN yarn install

EXPOSE 3000
ENV PORT 3000

CMD ["yarn", "start"]
