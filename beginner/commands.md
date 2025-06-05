# Basic Docker Commands

Learn essential Docker commands to manage containers and images.

---

## Commands

- `docker pull node:18-slim`: Download the Node.js image.
- `docker run -d -p 3000:3000 node:18-slim`: Run a container in detached mode.
- `docker ps`: List running containers.
- `docker stop <container>`: Stop a container.
- `docker rm <container>`: Remove a container.
- `docker images`: List images.

---

## Example: Run an Nginx Container

```bash
docker run -d -p 80:80 nginx
```

Visit [http://localhost](http://localhost) to see the Nginx welcome page.

---

## Next Steps

Build your first app in [Dockerfile](Dockerfile).
