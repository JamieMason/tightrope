/** @file Generate all the types for curried functions */
import { resolve } from 'node:path';
import { Project } from 'ts-morph';
import { getAllCurriedFunctions } from './get-all-curried-functions.js';
import { getCombinations } from './get-combinations.js';

const project = new Project({
  tsConfigFilePath: resolve(process.cwd(), './tsconfig.json'),
  skipAddingFilesFromTsConfig: true,
});

project.addSourceFilesAtPaths(['src/**/*.ts', '!**/*.d.ts', '!**/*.spec.ts']);

getAllCurriedFunctions(project).forEach(getCombinations);
