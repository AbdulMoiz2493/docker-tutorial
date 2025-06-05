# CI/CD with Docker

Automate building and pushing images using GitHub Actions.

---

## Example: GitHub Actions Workflow


```yaml
name: Docker Build and Push

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Log in to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      - name: Build and push
        run: |
          docker build -t AbdulMoiz2493/my-node-app:latest ./beginner
          docker push AbdulMoiz2493/my-node-app:latest
