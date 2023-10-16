# /app
# FROM --platform=arm64 node:19.2-alpine3.17
# FROM node:19.2-alpine3.17

# Multiple platforms
# FROM --platform=$BUILDPLATFORM node:19.2-alpine3.17

# STAGE 1 Dependencies
FROM node:19.2-alpine3.17 as dependencies

# cd app
WORKDIR /app

# copy package.json
COPY package.json ./

# install dependencies and start server
RUN npm install


# STAGE 2 Build and Test
FROM node:19.2-alpine3.17 as builder

# move to app
WORKDIR /app

# copy node_modules from dependencies stage
COPY --from=dependencies /app/node_modules ./node_modules

# copy from host to builder
COPY . .

RUN npm run test


# STAGE 3 Production dependencies
FROM node:19.2-alpine3.17 as prod-deps

WORKDIR /app

COPY package.json .

RUN npm install --omit=dev


# STAGE 4 runner
FROM node:19.2-alpine3.17 as runner

WORKDIR /app

COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks

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




