#!/usr/bin/env bash

# Stop all container
docker-compose down --remove-orphans --volumes

# Remove vendor and output directories
( cd packages/api && rm -rf dist && rm -rf node_modules )
( cd packages/frontend && rm -rf public && rm -rf node_modules )
( cd packages/ui && rm -rf public && rm -rf node_modules )
