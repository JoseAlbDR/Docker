FROM node:19.2-alpine as dependencies
WORKDIR /app
COPY package.json package.json
RUN npm install 

FROM node:19.2-alpine as production
WORKDIR /app
COPY --from=dependencies /app/node_modules node_modules
COPY . .
RUN npm test
RUN rm -rf app.test.js && rm -rf node_modules
RUN npm install --omit=dev
CMD ["npm", "start"]