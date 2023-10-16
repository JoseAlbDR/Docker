# /app
# FROM --platform=arm64 node:19.2-alpine3.17
# FROM node:19.2-alpine3.17

# Multiple platforms
# FROM --platform=$BUILDPLATFORM node:19.2-alpine3.17
FROM node:19.2-alpine3.17


# cd app
WORKDIR /app

# copy needed files to /app
COPY . .

# install dependencies and start server
RUN npm install

# testing
RUN npm run test

# delete unused files
RUN rm -rf tests && rm -rf node_modules

# reinstall prod dependencies
RUN npm install --prod

# start server, only one CMD per file
CMD [ "node","app.js" ]

# BUILD
# docker build --tag cron-ticker . => cront-ticker:latest, cron-ticker:castor, cron-ticker:nuub, etc

# TAGS
# docker tag cron-ticker cron-ticker:castor => cron-ticker:latest

# PUSH
# rename container to remote container name jadero/cron-ticker, or jadero/cron-ticker:castor or wutever
# docker push jadero/cron-ticker, jadero/cron-ticker:castor

# BUILDX
# docker buildx create --name mybuilder --driver docker-container --bootstrap
# docker buildx ls
# docker buildx use mybuilder
# docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7,linux/arm64/v8 -t jadero/cron-ticker --push .




