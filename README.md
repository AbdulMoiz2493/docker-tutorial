# Docker Tutorial Repository 

Welcome to the Docker Tutorial Repository by AbdulMoiz2493! This repository provides a hands-on guide to learning Docker using JavaScript and Node.js, from beginner to advanced levels.

---

## Purpose

Learn Docker through Node.js-focused tutorials, covering containers, images, Docker Compose, and advanced orchestration. This repo is designed for users of all skill levels.

---

## Prerequisites

- **Docker**: Install Docker Desktop (Windows/macOS) or Docker Engine (Linux).
- **Basic command-line knowledge**.
- **Node.js** (optional, for local testing outside Docker).
- **A code editor** like VS Code.
- **Optional**: Docker Compose.
- **Git** to clone this repository.

---

## How to Use This Repository

1. Clone the repo:
   ```bash
   git clone https://github.com/AbdulMoiz2493/docker-tutorial.git
   cd docker-tutorial
   ```

2. Navigate to the `beginner`, `intermediate`, or `advanced` folders.

3. Follow the markdown instructions (e.g., `beginner/intro.md`).

4. Use the provided Dockerfile and `app.js` files for practice.

---

## Repository Structure

```
/docker-tutorial
├── /beginner           # Beginner tutorials, Dockerfile, and app.js
├── /intermediate       # Intermediate topics, Dockerfile, and app.js
├── /advanced           # Advanced topics, Dockerfile, and app.js
├── /scripts            # Automation scripts (setup.sh)
├── README.md           # This file
├── LICENSE             # MIT License
├── CONTRIBUTING.md     # Contribution guidelines
├── cheatsheet.md       # Docker command reference
├── troubleshooting.md  # Common issues and solutions
├── .gitignore          # Git ignore file
```

---

## Table of Contents

* **Beginner Tutorials**
* **Intermediate Tutorials**
* **Advanced Tutorials**
* **Cheat Sheet**
* **Troubleshooting**
* **Contributing**

---

### Beginner Tutorials

1. **[Introduction to Docker](beginner/intro.md)**: What is Docker? Containers vs. VMs, key concepts.
2. **[Installation](beginner/installation.md)**: Install Docker on Windows, macOS, or Linux.
3. **[Basic Commands](beginner/commands.md)**: Run containers with `docker run`, `docker ps`, etc.
4. **[First Dockerfile](beginner/dockerfile.md)**: Build a Node.js app with Dockerfile and `app.js`.

---

### Intermediate Tutorials

1. **[Working with Images](intermediate/images.md)**: Pull, tag, and push images.
2. **[Docker Compose](intermediate/compose.md)**: Run multi-container apps with Dockerfile, `app.js`, and `docker-compose.yml`.
3. **[Volumes](intermediate/volumes.md)**: Persist data with volumes.
4. **[Networking](intermediate/networking.md)**: Connect containers via networks.

---

### Advanced Tutorials

1. **[Dockerfile Optimization](advanced/optimization.md)**: Multi-stage builds with Dockerfile and `app.js`.
2. **[CI/CD Integration](advanced/cicd.md)**: Automate builds with GitHub Actions.
3. **[Orchestration](advanced/orchestration.md)**: Intro to Docker Swarm.
4. **[Security](advanced/security.md)**: Run non-root containers, scan images.

---

### Cheat Sheet

See `cheatsheet.md` for common Docker commands and Dockerfile syntax.

---

### Troubleshooting

Check `troubleshooting.md` for solutions to issues like port conflicts.

---

### Contributing

Want to contribute? Read `CONTRIBUTING.md` for guidelines. Join the community via Docker forums.

---

## Getting Started

Start with the beginner section:

```bash
cd beginner
cat intro.md
```

Try the beginner Dockerfile:

```bash
cd beginner
docker build -t my-node-app .
docker run -p 3000:3000 my-node-app
```

---

**Happy Dockering!** 🚢

