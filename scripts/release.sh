#!/bin/bash

# Release branch
master="master"
prefix="stable-"

git pull origin $master || exit 1
echo "Current pull origin $master."

# Auto generate version number and tag
standard-version --tag-prefix $prefix || exit 1

git push --follow-tags origin $master || exit 1

echo "Git push origin $master"
echo "Release finished."
