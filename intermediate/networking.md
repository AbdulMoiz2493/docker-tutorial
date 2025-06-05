# Docker Networking

---

## Network Types

- **Bridge**: Default, containers communicate internally.
- **Host**: Uses the host’s network stack.
- **Overlay**: For multi-host setups (e.g., Docker Swarm).

---

## Example: Custom Network

```bash
docker network create my-network

docker run -d --network my-network --name redis redis:6.2-alpine

docker run -d --network my-network -p 3000:3000 my-node-app
```

---

## Exercise

Connect the `intermediate` app to a custom network.
