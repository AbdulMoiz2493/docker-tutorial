# Dockerfile Optimization

Optimize images using multi-stage builds for smaller, more efficient images.

---

## Example: Multi-Stage Build

The `Dockerfile` and `app.js` below use a multi-stage build for a Node.js app.

---

### Dockerfile

See `advanced/Dockerfile`:

```dockerfile
# Build stage
FROM node:18-slim AS builder

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

# Assume a build step (e.g., for TypeScript or minification)
RUN npm install typescript && npm run build || true

# Production stage
FROM node:18-slim

WORKDIR /app

COPY --from=builder /app .

USER node

CMD ["npm", "start"]
