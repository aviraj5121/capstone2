FROM node

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN yarn

CMD ["npm", "start"]