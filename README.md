# Fun Docker Swarm App 🚀

This is a simple multi-service application using **Docker Swarm** and **Dockerfiles**.

### 🔧 Services Included:
- **Node.js Web App** – Simple Express app with a visitor counter
- **Redis** – Key-value store to track visits

### 📦 Project Structure
```
fun-docker-swarm-app/
├── web/
│   ├── Dockerfile
│   ├── app.js
│   └── package.json
└── docker-compose.yml
```

### 🛠️ How to Run

```bash
# 1. Initialize Docker Swarm (only once per machine)
docker swarm init

# 2. Deploy the stack
docker stack deploy -c docker-compose.yml funapp

# 3. Open the app in your browser:
http://localhost:8080
```

### 🧹 Cleanup
```bash
docker stack rm funapp
```

### 🐳 Enjoy learning Docker!

