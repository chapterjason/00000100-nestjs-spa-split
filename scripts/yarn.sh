#!/usr/bin/env bash

( cd packages/api && yarn "$@" )
( cd packages/frontend && yarn "$@" )
( cd packages/ui && yarn "$@" )
