# Installing Docker

## Windows/macOS

1. Download **Docker Desktop**.
2. Run the installer and follow the prompts.
3. Open Docker Desktop to start the Docker daemon.
4. Verify installation:
   ```bash
   docker --version
   docker run hello-world
   ```

---

## Linux

1. Follow the official guide for your distribution.
2. Example for Ubuntu:

   ```bash
   sudo apt-get update
   sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```
3. Add your user to the Docker group:

   ```bash
   sudo usermod -aG docker $USER
   ```
4. Verify installation:

   ```bash
   docker --version
   docker run hello-world
   ```

---

## Next Steps

Try basic commands in [commands.md](commands.md).

