import { globSync, writeFileSync } from 'node:fs';
import pkg from '../package.json' with { type: 'json' };

const srcDir = new URL('../src', import.meta.url).pathname;
const files = globSync('./**/*.ts', { cwd: srcDir }).sort();

(pkg as any).exports = {};

for (const file of files) {
  if (file.includes('.spec.')) continue;
  const relative = `./${file}`;
  const id = relative.endsWith('/index.ts')
    ? relative.replace(/\/index.ts$/, '')
    : relative.replace(/\.ts$/, '');
  const shortPath = file.replace(/\.ts$/, '');
  pkg.exports[id] = {
    types: `./src/${shortPath}.ts`,
    default: `./dist/${shortPath}.js`,
  };
}

const pkgPath = new URL('../package.json', import.meta.url).pathname;
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

console.log(pkgPath);
console.log(pkg);
