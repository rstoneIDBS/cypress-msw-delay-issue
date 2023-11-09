import { http, HttpResponse, delay } from 'msw'
 
export const handlers = [
  http.get(
    '/mockapi',
    async () => {
      await delay();
      return HttpResponse.json(['Tom', 'Jerry', 'Spike']);
    }
  ),
  http.get(
    '/mockapi-nodelay',
    async () => {
      return HttpResponse.json(['Tom', 'Jerry', 'Spike']);
    }
  )
];