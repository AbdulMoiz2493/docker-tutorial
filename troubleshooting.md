# Troubleshooting Docker Issues

## Common Issues and Solutions

### Port Conflict (e.g., Error: bind: address already in use)
- **Solution**: Check processes:
    ```bash
    lsof -i :3000
    ```
  Stop them or use another port:
    ```bash
    docker run -p 3001:3000
    ```

### Permission Denied (e.g., accessing Docker daemon)
- **Solution**: Add user to Docker group (Linux):
    ```bash
    sudo usermod -aG docker $USER
    ```
  Log out and back in.

### Image Not Found
- **Solution**: Pull the image:
    ```bash
    docker pull <image>
    ```
  Or check for typos in the image name.

### Container Exits Immediately
- **Solution**: Check logs:
    ```bash
    docker logs <container>
    ```
  Verify the `CMD` in your Dockerfile.

### Docker Compose Fails
- **Solution**: Validate syntax:
    ```bash
    docker-compose config
    ```

## Debugging Tips

- Use `docker ps -a` to see stopped containers.
- Inspect container details:
    ```bash
    docker inspect <container>
    ```
- Check Docker version:
    ```bash
    docker --version
    ```

Visit Docker forums or open a GitHub issue for help.
