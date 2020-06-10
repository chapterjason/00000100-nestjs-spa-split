# ---- base ----
FROM node:12-alpine AS base

ARG APP_PORT

WORKDIR /app

COPY tsconfig.json ./
COPY ormconfig.js ./
COPY .env ./
COPY healthcheck.js ./

HEALTHCHECK --interval=12s --timeout=12s --start-period=30s CMD node /app/healthcheck.js

# ---- dependencies ----
FROM base as dependencies

COPY yarn.lock ./
COPY .eslintrc ./
COPY package.json ./
COPY nodemon.json ./

RUN yarn install --production --pure-lockfile --non-interactive --cache-folder ./ycache && \
    cp -R node_modules prod_node_modules && \
    rm -rf node_modules && \
    yarn install --pure-lockfile --non-interactive --cache-folder ./ycache && \
    rm -rf ./ycache

# ---- development ----
FROM dependencies as development

ARG APP_PORT
EXPOSE ${APP_PORT}

ENV NODE_ENV=development
ENV PORT=${APP_PORT}

CMD node_modules/.bin/nodemon

# ---- production ----
FROM base as production

ARG APP_PORT
EXPOSE ${APP_PORT}

ENV NODE_ENV=production
ENV PORT=${APP_PORT}

COPY --from=dependencies /app/prod_node_modules ./node_modules
COPY src /app/src

CMD node_modules/.bin/ts-node src/main.ts
