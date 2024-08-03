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
        autoUpdate: true,
        branches: 97.1,
        functions: 87.64,
        lines: 97.65,
        statements: 97.65,
      },
    },
  },
});
