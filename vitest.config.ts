import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.spec.ts'],
    coverage: {
      all: true,
      enabled: true,
      include: ['src/**/*.ts'],
      exclude: [
        // these files only contain types and although used in tests, show 0
        // coverage
        'src/**/index.ts',
        'src/**/types.ts',
        // this is not source code
        '**/*.spec.ts',
      ],
      extension: ['.ts'],
      provider: 'v8',
      reporter: ['lcov', 'html', 'text'],
      thresholds: {
        branches: 95,
        functions: 95,
        lines: 95,
        statements: 95,
      },
    },
    setupFiles: [
      'test/matchers/to-be-err-of.ts',
      'test/matchers/to-be-ok-of.ts',
      'test/matchers/to-pass-guard.ts',
      'test/matchers/to-produce.ts',
      'test/matchers/to-produce-async.ts',
    ],
    typecheck: {
      enabled: true,
    },
  },
});
