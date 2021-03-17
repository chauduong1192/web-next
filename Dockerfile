FROM mhart/alpine-node AS builder

WORKDIR /app

COPY ["package.json", "package-lock.json*", "yarn.lock", "./"]

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build
RUN yarn install --production --frozen-lockfile

FROM mhart/alpine-node:slim as production

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]