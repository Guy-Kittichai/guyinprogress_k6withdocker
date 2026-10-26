import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: Number(__ENV.VUS || 10),
  duration: __ENV.DURATION || '30s',
};

export default function () {
  const response = http.get(`${__ENV.BASE_URL}/api/health`);

  check(response, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}