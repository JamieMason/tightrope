import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const [_nodePath, _selfPath, relativePath] = process.argv;
const absolutePath = path.resolve(relativePath);
const kebabName = path.basename(absolutePath, path.extname(absolutePath));
const camelName = kebabName.replace(/-([a-z])/g, g => g[1].toUpperCase());
const testPath = absolutePath.replace(/\.ts$/, '.spec.ts');

const contents = `
import { expect, test } from 'vitest';
import { ${camelName} } from './${kebabName}.js';

test.each([
  ['FAILING TEST', true],
  [{}, false],
  [null, false],
  [undefined, false],
])('${camelName}(%s) should be %j', (value, expected) => {
  expect(${camelName}(value)).toEqual(expected);
});
`.trimStart();

fs.writeFileSync(testPath, contents);

// @TODO: run `zed ${testPath}` in the terminal to open the test file
execSync(`zed ${testPath}`, { stdio: 'inherit' });

console.log(testPath);
console.log(contents);
