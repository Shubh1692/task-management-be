# Use the official Node.js 18 image.
FROM node:18

# Create and set the working directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code to the working directory.
COPY . .

# Build the NestJS application.
RUN npm run build

# Expose port 3000 to the host.
EXPOSE 3000

# Start the NestJS application.
CMD ["npm", "run", "start:prod"]
