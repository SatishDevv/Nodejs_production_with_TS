# Node application Dockerfile
FROM node:20 AS base

# Set the working directory
WORKDIR /user/src/backend-app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci 

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 5000

# Start the application
CMD [ "npm", "run","dev" ]