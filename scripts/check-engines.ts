import { readFileSync } from 'node:fs';
import { globSync } from 'node:fs';
import { satisfies } from 'semver';

const rootDir = new URL('..', import.meta.url).pathname;
const rootPath = new URL('../package.json', import.meta.url).pathname;
const root = JSON.parse(readFileSync(rootPath, 'utf8'));
const syncpackEngine = root.engines.node.replace('>=', '');

const unsatisfiedDependencies = globSync('node_modules/**/package.json', {
  cwd: rootDir,
})
  .map(filePath => readFileSync(filePath, 'utf8'))
  .filter(json => json.includes('"engines"'))
  .map(json => JSON.parse(json))
  .filter(file => file.engines?.node)
  .map(file => {
    const name = file.name;
    const dependencyEngine = file.engines.node;
    const isSatisfied = satisfies(syncpackEngine, dependencyEngine);
    return {
      name,
      expected: syncpackEngine,
      actual: dependencyEngine,
      isSatisfied,
    };
  })
  .filter(result => !result.isSatisfied);

if (unsatisfiedDependencies.length > 0) {
  console.error(
    'The following dependencies have incompatible engines:',
    unsatisfiedDependencies,
  );
  process.exit(1);
} else {
  console.info('All dependencies have compatible engines.');
}
