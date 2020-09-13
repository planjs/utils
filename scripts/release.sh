#!/bin/bash

# Release branch
master="master"
prefix="stable-"

git pull origin $master
echo "Current pull origin $master."

# Auto generate version number and tag
standard-version --tag-prefix $prefix

git push --follow-tags origin $master

echo "Git push origin $master"
echo "Release finished."
