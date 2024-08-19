# Base image for development
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if using npm) or yarn.lock (if using yarn)
COPY package*.json ./

# Install dependencies, including development dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your Node.js server will run on
EXPOSE 4000

# Start the Node.js server using Nodemon for development
CMD ["npm", "run", "dev"]
