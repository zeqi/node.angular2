#!/usr/bin/env bash
npm run tsc && npm run concurrently && npm run tsc:w &
npm run www