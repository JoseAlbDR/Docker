# /app
FROM node:19.2-alpine3.17

# cd app
WORKDIR /app

# copy needed files to /app
COPY . ./

# install dependencies and start server
RUN npm install

# testing
RUN npm run test

# start server, only one CMD per file
CMD [ "node","app.js" ]

# BUILD
# docker build --tag cron-ticker . => cront-ticker:latest, cron-ticker:castor, cron-ticker:nuub, etc

# TAGS
# docker tag cron-ticker cron-ticker:castor => cron-ticker:latest

# PUSH
# rename container to remote container name jadero/cron-ticker, or jadero/cron-ticker:castor or wutever
# docker push jadero/cron-ticker, jadero/cron-ticker:castor






