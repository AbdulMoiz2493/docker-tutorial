# Volumes and Data Persistence

---

## Bind Mounts vs. Volumes

- **Bind Mounts**: Map a host directory to a container.
- **Volumes**: Managed by Docker, persist data independently of the container lifecycle.

---

## Example: Persist Redis Data

See `intermediate/docker-compose.yml` for a volume example.

---

## Bind Mount Example

```bash
docker run -v $(pwd)/data:/app/data my-node-app
```

---

## Exercise

Create a volume for the `intermediate/Dockerfile` app to persist logs.

