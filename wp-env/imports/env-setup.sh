#!/bin/bash

if [ ! -f /var/www/html/.initialized ]; then
  # one-time setup commands here

  echo "Setting up NEFAC WordPress development environment..."

  # import from version-controlled database copy
  wp db import ./imports/database.sql

  # fix installation of wp-graphql-content-blocks 
  # (no longer needed)
  # (cd wp-content/plugins/wp-graphql-content-blocks && composer install)

  # fix possibly broken permalink behavior
  wp rewrite flush --hard

  echo "Finished setting up"

  touch /var/www/html/.initialized
fi