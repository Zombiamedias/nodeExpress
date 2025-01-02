FROM alpine:3.20
ENV NODE_VERSION 22.12.0

WORKDIR /index

COPY . .

RUN npm install

EXPOSE 5000

CMD [ "npm", "start" ]