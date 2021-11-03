FROM node:14.17.0-alpine3.11 as build

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY . .
RUN npm install
RUN npm run build

FROM node:14.17.0-alpine3.11 as app

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY --from=build /home/node/app/dist .
RUN npm install
RUN npm run swagger

ENTRYPOINT [ "npm", "start" ]