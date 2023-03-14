# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --production

# Copy the rest of the application code to the container
COPY . .

# Expose port 5000 for the application
EXPOSE 5000

# Start the application
CMD ["yarn", "run", "start"]
