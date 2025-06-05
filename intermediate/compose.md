# Docker Compose: Multi-Container Apps

This tutorial introduces Docker Compose for managing multi-container Node.js applications.

---

## What is Docker Compose?

Docker Compose uses a YAML file (`docker-compose.yml`) to define and run multiple containers.

---

## Example: Node.js + Redis App

The `Dockerfile`, `app.js`, and `docker-compose.yml` below set up an Express app with Redis.

---

### Dockerfile

See `intermediate/Dockerfile`:

```dockerfile
FROM node:18-slim

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
