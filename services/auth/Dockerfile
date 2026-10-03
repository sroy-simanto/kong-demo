FROM node:24-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY tsconfig.json ./
COPY src ./src

EXPOSE 4002

CMD ["yarn", "tsx", "src/index.ts"]