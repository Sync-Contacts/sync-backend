#!/bin/bash

database="syncdb"

echo "Configuring datasbase: $database"

dropdb -U node_user syncdb
createdb -U node_user syncdb

psql -U node_user syncdb < ./bin/sql/sync.sql

echo "$database configured"