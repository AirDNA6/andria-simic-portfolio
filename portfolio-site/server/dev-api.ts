import { createServer } from 'node:http';
import { clientIp, handleChat } from './twin';

// Local stand-in for the Vercel function in api/chat.ts: `ng serve` proxies /api to this server.
try {
  process.loadEnvFile('.env');
} catch {
  // No .env file: GEMINI_API_KEY may still come from the real environment.
}

const PORT = Number(process.env['API_PORT'] ?? 3001);
const MAX_BODY_BYTES = 32_768;

function readBody(request: AsyncIterable<Buffer>): Promise<string> {
  return (async () => {
    const chunks: Buffer[] = [];
    let size = 0;
    for await (const chunk of request) {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        throw new Error('body too large');
      }
      chunks.push(chunk);
    }
    return Buffer.concat(chunks).toString('utf8');
  })();
}

createServer(async (req, res) => {
  const send = (status: number, body: unknown, headers: Record<string, string> = {}) => {
    res.writeHead(status, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers });
    res.end(JSON.stringify(body));
  };

  if (req.url?.split('?')[0] !== '/api/chat') {
    send(404, { error: 'not_found' });
    return;
  }

  let body = '';
  if (req.method === 'POST') {
    try {
      body = await readBody(req);
    } catch {
      send(413, { error: 'body_too_large' });
      return;
    }
  }

  const result = await handleChat({
    method: req.method ?? 'GET',
    body,
    ip: clientIp(req.headers['x-forwarded-for'], req.socket.remoteAddress),
    apiKey: process.env['GEMINI_API_KEY'],
    model: process.env['GEMINI_MODEL'],
    fallbackModel: process.env['GEMINI_FALLBACK_MODEL'],
  });
  send(result.status, result.body, result.headers);
}).listen(PORT, () => {
  const keyState = process.env['GEMINI_API_KEY'] ? 'GEMINI_API_KEY loaded' : 'GEMINI_API_KEY is NOT set (add it to .env and restart)';
  console.log(`[twin] dev API on http://localhost:${PORT}/api/chat - ${keyState}`);
});
