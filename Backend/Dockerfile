FROM node

RUN mkdir -p /home/app

COPY . /home/app

COPY package*.json /home/app

WORKDIR /home/app

RUN npm i

CMD ["npm", "run", "dev"]
