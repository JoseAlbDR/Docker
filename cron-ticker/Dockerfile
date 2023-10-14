# /app
FROM node:19.2-alpine3.17

# cd app
WORKDIR /app

# copy needed files to /app
COPY app.js package.json ./

# install dependencies and start server
RUN npm install

# start server, only one CMD per file
CMD [ "node","app.js" ]

# BUILD
# docker build --tag cron-ticker .

# TAGS
# docker tag cron-ticker cron-ticker:castor => cron-ticker:latest








