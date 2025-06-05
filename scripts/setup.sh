#!/bin/bash

# Setup script for Docker tutorial repository

echo "Pulling required images..."
docker pull node:18-slim
docker pull redis:6.2-alpine
docker pull nginx:latest

echo "Building beginner Dockerfile..."
cd beginner
docker build -t my-node-app .
cd ..

echo "Setup complete! Navigate to beginner, intermediate, or advanced folders to start."