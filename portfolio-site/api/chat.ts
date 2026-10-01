import { clientIp, handleChat } from '../server/twin';

// Only the parts of Vercel's Node request/response this handler touches.
interface ApiRequest {
  method?: string;
  body?: unknown;
  headers: Record<string, string | string[] | undefined>;
  socket?: { remoteAddress?: string };
}

interface ApiResponse {
  status(code: number): ApiResponse;
  setHeader(name: string, value: string): unknown;
  json(body: unknown): unknown;
}

/** POST /api/chat. The Gemini key is read here, on the server, and never reaches the browser. */
export default async function handler(req: ApiRequest, res: ApiResponse): Promise<void> {
  const result = await handleChat({
    method: req.method ?? 'GET',
    body: req.body,
    ip: clientIp(req.headers['x-forwarded-for'], req.socket?.remoteAddress),
    apiKey: process.env['GEMINI_API_KEY'],
    model: process.env['GEMINI_MODEL'],
    fallbackModel: process.env['GEMINI_FALLBACK_MODEL'],
  });

  res.setHeader('Cache-Control', 'no-store');
  for (const [name, value] of Object.entries(result.headers ?? {})) {
    res.setHeader(name, value);
  }
  res.status(result.status).json(result.body);
}
