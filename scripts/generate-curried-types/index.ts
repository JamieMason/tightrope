/** @file Generate all the types for curried functions */
import { resolve } from 'path';
import { Project } from 'ts-morph';
import { getAllCurriedFunctions } from './get-all-curried-functions';
import { getCombinations } from './get-combinations';

const project = new Project({
  tsConfigFilePath: resolve(__dirname, '../../tsconfig.json'),
  skipAddingFilesFromTsConfig: true,
});

project.addSourceFilesAtPaths(['src/**/*.ts', '!**/*.d.ts', '!**/*.spec.ts']);

getAllCurriedFunctions(project).forEach(getCombinations);
