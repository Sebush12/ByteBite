FROM node:18.18.0 

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . /usr/src/app

# RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
