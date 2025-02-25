import {join} from 'path';
import funcSandbox from './func.Sandbox.js';
import {ReadFile} from './toolkit/fileIO.mod.js';

(async () => {
  // Load data/getData.json
  const raw: string = await ReadFile(join('data', 'getData.json'));
  global.apiData = JSON.parse(raw);
  if (process.argv.includes('--vscode')) await funcSandbox();
})().catch(err => {
  console.error(err);
});
