FROM node:18-alpine
RUN npm install -g typescript

# Work dir
WORKDIR /langoustine/app

# Copy files
COPY package.json package-lock.json tsconfig.json ./
COPY src ./src

# Install dependencies
RUN npm install

# Ports to expose:
# - HTTP server
EXPOSE 8000

# Build the project
RUN npm run build

# Remove dev dependencies
RUN npm prune --production

# Runs the application, when the container starts.
CMD ["node", "dist/index.js"]