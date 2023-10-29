## Docker

Build the image with the command line:

```bash
docker build -t langoustine-server .
```

Start the container with the command line:

```bash
docker run -p 8000:8000 -p 27017:27017 -e PORT=8000 -e DB_URL=mongodb://localhost:27017/test langoustine-server
```
