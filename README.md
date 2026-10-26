# K6 Performance Testing with Docker Compose

A cross-platform K6 performance testing project using Docker Compose. Run performance tests on macOS and Windows without installing K6 directly on your machine.

## Prerequisites

- Docker Desktop: https://www.docker.com/products/docker-desktop/


## Configuration

| Variable | Description | Default |
|---|---|---|
| `BASE_URL` | Target API base URL | Required |
| `VUS` | Number of virtual users | `10` |
| `DURATION` | Test duration | `30s` |


## 1. Validate Docker Compose

Check the Compose configuration before running a test.

```bash
docker compose config
```

## 2. Run a Performance Test

Run the K6 script configured in Docker Compose:

```bash
docker compose run --rm k6
```

The configured script (docker-compose.yml):

```text
/tests/scripts/load-report.js
```

## 3. Generate Test Reports

The `load-report.js` script can generate reports using K6's `handleSummary()` function.

Example output:

```text
results/
├── summary.html
└── summary.json
```

## 4. Run K6 Web Dashboard

Start K6 with the Web Dashboard enabled:

```bash
docker compose run --rm --service-ports k6
```

While the test is running, open:

**http://localhost:5665**

## 5. Output Files

1. results/summary.html
2. results/summary.json
3. results/k6-dashboard-report.html



