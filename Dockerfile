FROM node:16.14.0

WORKDIR /usr/src/app

RUN apt-get update || : && apt-get install python -y
RUN apt-get install ffmpeg -y

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]