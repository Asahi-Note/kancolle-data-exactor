import funcSandbox from './func.Sandbox.js';

(async () => {
  if (process.argv.includes('--vscode')) await funcSandbox();
})().catch(err => {
  console.error(err);
});
