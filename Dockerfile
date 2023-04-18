FROM node:16-alpine3.11 AS builder
WORKDIR /home
ADD ./src ./src
COPY . .
RUN npm i && npm run build

FROM nginx:1.21-alpine AS web-server
WORKDIR /usr/share/nginx/html
COPY --from=builder /home/dist .
COPY spa.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD [ "nginx", "-g", "daemon off;" ]