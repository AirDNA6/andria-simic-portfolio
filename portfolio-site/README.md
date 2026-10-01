# Andrias Simić — Portfolio

Professional portfolio site built with **Angular 19**. Content sourced from `CV.pdf`.

## Run locally

```bash
cd portfolio-site
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200). `npm start` runs the site and the digital-twin API together.

## Digital twin

A chat sidebar (a tab on the right edge of every page opens it) answers visitors' questions about this portfolio, powered by Gemini (`gemini-3.5-flash`).
It only answers from the portfolio data in `src/app/data/` and refuses everything else.

Gemini models are sometimes overloaded (503) or out of quota (429). When the main model fails, the server
retries brief errors once and then tries fallback models in order, within a 45 second budget.

| Variable | Default | Purpose |
| --- | --- | --- |
| `GEMINI_API_KEY` | none | Required. |
| `GEMINI_MODEL` | `gemini-3.5-flash` | Main model. |
| `GEMINI_FALLBACK_MODEL` | `gemini-3.6-flash,gemini-3.5-flash-lite` | Comma-separated models tried after the main one. Set it empty to turn the fallback off. |

Free-tier keys have small daily limits per model (`gemini-3.5-flash` allows 20 requests a day), which a public
site can use up quickly. Enable billing on the Google project for real traffic.

The key is only ever read by the server (`api/chat.ts`, or `server/dev-api.ts` locally), never by the browser.
The system prompt and scope rules live in `server/twin.ts`. Editing the portfolio data updates what the twin knows.

## Build for production

```bash
npm run build
```

Output is in `dist/portfolio-site`.

## Sections

- **Hero** — Introduction and CTAs
- **About** — Bio, education, languages
- **Career journey** — Timeline from SDDITG intern to ExamRoom.AI
- **Skills** — Technical stack grouped by domain
- **Projects** — Personal GitHub projects
- **Contact** — Email and GitHub links
