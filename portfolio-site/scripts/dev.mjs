// Starts the Angular dev server and the local digital-twin API together (npm start).
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const bin = (path) => fileURLToPath(new URL(`../node_modules/${path}`, import.meta.url));
const run = (script, args) => spawn(process.execPath, [bin(script), ...args], { stdio: 'inherit' });

const children = [
  run('tsx/dist/cli.mjs', ['watch', 'server/dev-api.ts']),
  run('@angular/cli/bin/ng.js', ['serve']),
];

let stopping = false;
function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  children.forEach((child) => child.kill());
  process.exit(code);
}

children.forEach((child) => child.on('exit', (code) => stop(code ?? 0)));
process.on('SIGINT', () => stop());
process.on('SIGTERM', () => stop());
