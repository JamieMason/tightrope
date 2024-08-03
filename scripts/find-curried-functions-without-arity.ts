/* Find curried functions which have a missing arity argument */

import { resolve } from 'node:path';
import { Project } from 'ts-morph';
import { getCallExpressionsByName } from './lib/get-call-expressions-by-name.js';

const project = new Project({
  tsConfigFilePath: resolve(process.cwd(), './tsconfig.json'),
  skipAddingFilesFromTsConfig: true,
});

project.addSourceFilesAtPaths(['src/**/*.ts', '!**/*.d.ts', '!**/*.spec.ts']);

for (const callExpr of project
  .getSourceFiles()
  .flatMap(file => getCallExpressionsByName(/^curry$/, file))
  .filter(callExpr => callExpr.getArguments().length === 1)) {
  console.log(callExpr.getSourceFile().getFilePath());
}
