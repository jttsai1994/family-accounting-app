FROM node:20-slim

WORKDIR /app

# Install dependencies first to leverage cache
# COPY package.json package-lock.json* ./
# RUN npm install

# We will mount the code, so just keep the container running or start dev server
CMD ["npm", "run", "dev", "--", "--host"]
