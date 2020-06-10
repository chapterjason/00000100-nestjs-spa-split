# ---- base ----
FROM node:12-alpine AS base

WORKDIR /app

# ---- dependencies ----
FROM base as dependencies

COPY tsconfig.json ./
COPY yarn.lock ./
COPY package.json ./
COPY .eslintrc ./
COPY webpack.config.js ./

RUN yarn install --pure-lockfile --non-interactive --cache-folder ./ycache && \
    rm -rf ./ycache

# ---- development ----
FROM dependencies as development

ARG APP_PORT

ENV NODE_ENV=development
ENV PORT=${APP_PORT}

CMD node_modules/.bin/encore dev-server --hot --public http://localhost:${PORT} --host 0.0.0.0 --port ${PORT} --debug

# ---- production ----
FROM dependencies as production

ARG PUBLIC

ENV NODE_ENV=production

COPY src /app/src

CMD node_modules/.bin/encore production --public ${PUBLIC}
