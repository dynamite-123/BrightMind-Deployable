FROM python:3.12-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DEBIAN_FRONTEND noninteractive

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        libpq-dev \
        netcat-traditional \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . .

# Create a startup script to handle migrations and server startup
RUN echo '#!/bin/bash \n\
python manage.py migrate --no-input \n\
exec "$@"' > /app/entrypoint.sh && chmod +x /app/entrypoint.sh

# Set the entry point
ENTRYPOINT ["/app/entrypoint.sh"]

# Default command
CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]
