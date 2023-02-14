FROM node:latest AS build
WORKDIR /todo
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build todo/dist/todo /usr/share/nginx/html
