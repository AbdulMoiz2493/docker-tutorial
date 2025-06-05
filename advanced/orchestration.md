# Docker Swarm Orchestration

---

## What is Docker Swarm?

A tool for orchestrating multiple containers across hosts.

---

## Example: Deploy a Service

```bash
docker swarm init

docker service create --replicas 2 -p 3000:3000 my-optimized-app
```

---

## Exercise

Deploy the `advanced/Dockerfile` app with Swarm.