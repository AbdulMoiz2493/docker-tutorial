# Docker Security Best Practices

---

## Non-Root User

The `advanced/Dockerfile` includes:

```dockerfile
USER node
```

This ensures containers run as a non-root user, improving security.

---

## Image Scanning

Use:

```bash
docker scan my-optimized-app
```

to scan for vulnerabilities.

---

## Exercise

Scan the `advanced/Dockerfile` image with Trivy.