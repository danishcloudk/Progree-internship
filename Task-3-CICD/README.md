# CI/CD Pipeline Configuration

This folder contains the solution for **Task 3**.

## Architecture
We are utilizing **GitHub Actions** as the CI/CD runner script. The pipeline is defined in `.github/workflows/ci-cd-pipeline.yml`.

### Pipeline Blocks
The pipeline triggers automatically on `push` or `pull_request` to the `main` branch. It contains two primary jobs:

1. **`test-and-lint`:**
   - Checks out the repository.
   - Sets up Node.js.
   - Installs application dependencies.
   - Executes static application linters and unit-testing suites (configured as placeholders, to be activated when tests are added to the app).
   - Logs execution status metrics.

2. **`build-and-push`:**
   - Depends on the successful completion of the `test-and-lint` block.
   - Uses `docker/setup-buildx-action` for optimized builds.
   - Builds the Docker image based on the multi-stage Dockerfile from Task 2.
   - (In a real-world scenario, this block would push the image to a container registry like Docker Hub or AWS ECR using secrets).

## How to Use
1. Copy the `.github` directory to the root of your repository (if it isn't already).
2. Push the code to GitHub.
3. Navigate to the **Actions** tab in your GitHub repository to view the pipeline running automatically.
