#!/usr/bin/env bash

. ./scripts/stop.sh

docker-compose down --remove-orphans --volumes --rmi all

. ./scripts/start.sh
