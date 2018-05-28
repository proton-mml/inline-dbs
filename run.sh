#!/bin/bash

cd test_db
npm install

export PGHOST=$1
export PGPORT=$2
export PGUSER=$3
export PGPASSWORD=$4
export PGDATABASE=$5
export MONGO_URL=$6
npm start index.js
npx babel-node nosql.js
