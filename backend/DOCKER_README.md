# BrightMind Django Backend - Dockerized

This directory contains the Dockerized Django backend for the BrightMind application.

## Docker Setup

We've included a Docker configuration to make deployment easy. Here's how to use it:

### Prerequisites

- Docker
- Docker Compose

### Setting Up Environment Variables

1. Copy the example environment file:
   ```
   cp .env.example .env
   ```

2. Edit the `.env` file with your actual environment variables:
   - Set a secure `SECRET_KEY`
   - Configure your `ALLOWED_HOSTS`
   - Add your API keys

### Building and Running with Docker

1. Build and start the Docker container:
   ```
   docker-compose up --build
   ```

2. For subsequent runs, you can simply use:
   ```
   docker-compose up
   ```

3. To run in detached mode (background):
   ```
   docker-compose up -d
   ```

4. To stop the containers:
   ```
   docker-compose down
   ```

## Accessing the Application

Once running, the application will be available at:
- API: http://localhost:8000/

## Managing Data

- Database data is persisted across container restarts
- Static files are stored in a named volume

## Development vs. Production

The default configuration is set up for production use. For development:

1. Set `DEBUG=True` in your `.env` file
2. You may want to adjust the Gunicorn settings for development purposes
