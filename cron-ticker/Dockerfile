FROM node:19.2-alpine AS dependencies
WORKDIR /app
COPY package.json package.json
RUN npm install

FROM node:19.2-alpine AS prod-deps
WORKDIR /app
COPY package.json package.json
RUN npm install --omit=dev

FROM node:19.2-alpine AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules node_modules
COPY . .
RUN npm test

FROM node:19.2-alpine AS runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules node_modules
COPY app.js package.json ./
COPY tasks/ ./tasks
CMD [ "npm", "start" ]
