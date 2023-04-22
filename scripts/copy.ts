import { globSync } from 'glob';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const pkg = require('../package.json');

pkg.exports = globSync('./src/**/*.ts')
  .filter((file) => !file.endsWith('.spec.ts') && !file.includes('/lib/'))
  .map((file) => file.replace('src/', './'))
  .reduce((acc, file) => {
    acc[file.replace('.ts', '').replace('/index', '')] = {
      types: file.replace('.ts', '.d.ts'),
      import: file.replace('.ts', '.js'),
      require: file.replace('.ts', '.js').replace('./', './cjs/'),
    };
    return acc;
  }, {} as Record<string, { types: string; import: string; require: string }>);

pkg.scripts.prepack = undefined;

writeFileSync(
  resolve(__dirname, '../dist/package.json'),
  JSON.stringify(pkg, null, 2),
);
