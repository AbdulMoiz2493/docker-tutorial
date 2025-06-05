# Working with Images

Learn to pull, tag, and push Docker images.

---

## Pulling Images

```bash
docker pull node:18-slim
```

---

## Tagging Images

Tag a built image:

```bash
docker build -t my-node-app:latest .
docker tag my-node-app:latest AbdulMoiz2493/my-node-app:latest
```

---

## Pushing to Docker Hub

* **Log in**:

  ```bash
  docker login
  ```
* **Push**:

  ```bash
  docker push AbdulMoiz2493/my-node-app:latest
  ```

---

## Exercise

Build and push the `beginner/Dockerfile` image to Docker Hub.