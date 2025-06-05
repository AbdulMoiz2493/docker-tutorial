# Docker Cheat Sheet

## Common Commands

- **docker pull <image>**: Download an image.
- **docker run -d -p <host>:<container> <image>**: Run a container in detached mode.
- **docker ps**: List running containers.
- **docker stop <container>**: Stop a container.
- **docker rm <container>**: Remove a container.
- **docker images**: List images.
- **docker build -t <name> .**: Build an image.
- **docker-compose up**: Start Compose services.
- **docker-compose down**: Stop and remove services.

## Dockerfile Syntax

- **FROM <image>**: Base image.
- **WORKDIR <path>**: Set working directory.
- **COPY <src> <dest>**: Copy files.
- **RUN <command>**: Run command during build.
- **CMD ["executable", "arg"]**: Default run command.

## Tips

- **Name containers**: `docker run --name my-app`.
- **View logs**: `docker logs <container>`.
- **Clean up**: `docker image prune`.
