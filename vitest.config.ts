import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.spec.ts'],
    coverage: {
      all: true,
      enabled: true,
      exclude: [
        // these files only contain types and although used in tests, show 0
        // coverage
        'src/option/index.ts',
        'src/result/index.ts',
        'src/fn/types.ts',
        // this is not source code
        '**/*.spec.*',
        'test/**',
      ],
      extension: ['.ts'],
      provider: 'v8',
      reporter: ['lcov', 'html', 'text'],
      thresholds: {
        autoUpdate: true,
        branches: 94.07,
        functions: 78,
        lines: 85.35,
        statements: 85.35,
      },
    },
  },
});