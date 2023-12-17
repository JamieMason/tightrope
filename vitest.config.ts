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
        branches: 94.11,
        functions: 90,
        lines: 90,
        statements: 90,
      },
    },
  },
});
