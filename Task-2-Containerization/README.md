# Application Containerization

This folder contains the solution for **Task 2**.

## Architecture
- A simple **Node.js Express** API is provided in the `app/` directory.
- A **multi-stage Dockerfile** is provided at the root of this folder.
  - **Stage 1 (Builder):** Uses `node:18-alpine` to install dependencies, specifically skipping development dependencies using `npm ci --only=production`.
  - **Stage 2 (Production):** Creates a minimal alpine image. It copies only the necessary built files, sets environment variables (`NODE_ENV` and `PORT`), creates a non-root user for security, and exposes the required port (`8080`).

## How to Build and Run
Ensure you have Docker installed and running.

1. **Build the image:**
   ```bash
   docker build -t progree-app:latest .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 8080:8080 --name my-progree-app progree-app:latest
   ```

3. **Verify it works:**
   Open your browser or run:
   ```bash
   curl http://localhost:8080/
   ```
   You should see a JSON response welcoming you to the application.
