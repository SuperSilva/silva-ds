import { execSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const nx = resolve(root, 'node_modules/.bin/nx');
const [, , target, filter] = process.argv;

const env = {
  ...process.env,
  // Vitest defaults to watch mode; CI=true makes it run once and exit.
  ...(target === 'test' && { CI: 'true' }),
};

function run(cmd) {
  try {
    execSync(cmd, { stdio: 'inherit', cwd: root, env });
  } catch {
    process.exit(1);
  }
}

if (!filter) {
  run(`${nx} run-many -t ${target}`);
} else {
  const all = execSync(`${nx} show projects`, { encoding: 'utf8', cwd: root })
    .trim()
    .split('\n')
    .filter(Boolean);

  const matched = all.filter((p) => p.includes(filter));

  if (matched.length === 0) {
    console.error(`No projects matching "${filter}". Available: ${all.join(', ')}`);
    process.exit(1);
  }

  run(`${nx} run-many -t ${target} --projects=${matched.join(',')}`);
}
