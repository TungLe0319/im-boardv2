FROM node:18.3.0-alpine AS build-env

WORKDIR /app
# replace with your projects name
COPY ./package*.json ./
RUN npm install 
RUN ls
COPY ./ ./


ENV PORT=80
EXPOSE 80


CMD [ "npm", "start" ]