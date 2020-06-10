#!/usr/bin/env bash

# @description Runs a command in the given container.
# @arg $1 string the docker-compose service name
# @arg $@ string the command
execute() {
  docker-compose exec "$@"
}

# Executes typeorm in api directory
execute api yarn run typeorm "$@"
