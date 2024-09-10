Instructions for running the app locally and with Docker.

## Prerequisites

- Node.js (v18+)
- Docker (if using Docker)

## Running Locally

1. **Clone the repo:**

   `https://github.com/ivan1dze/tz-CodesCommanders.git`

   `cd tz-CodesCommanders`

   `cd frontend-ts`

3. Install dependencies:

   `npm install`

## Start the app:
`npm start`

Access the app at http://localhost:3000.

## Running with Docker
Build the Docker image:

`docker build -t testbuild `

Run the container:

`docker run -p 80:80 testbuild`

Access the app at http://localhost.
