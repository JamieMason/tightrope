import { expect, test, vi } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { tap } from '../fn/tap.js';

test('provides higher order console logging methods', async () => {
  const Console = await getMockedConsole();

  pipe(
    'hello',
    tap(Console.error('%s error log')),
    tap(Console.info('%s info log')),
    tap(Console.log('%s log')),
    tap(Console.warn('%s warn log')),
  );

  expect(console.error).toHaveBeenCalledWith('%s error log', 'hello');
  expect(console.info).toHaveBeenCalledWith('%s info log', 'hello');
  expect(console.log).toHaveBeenCalledWith('%s log', 'hello');
  expect(console.warn).toHaveBeenCalledWith('%s warn log', 'hello');
});

test('provides a higher order console timer', async () => {
  const Console = await getMockedConsole();
  const timer = Console.timer('timer');

  pipe(
    'world',
    timer.start,
    timer.log('first log'),
    timer.log('second log'),
    timer.stop,
  );

  expect(console.time).toHaveBeenCalledWith('timer');
  expect(console.timeLog).toHaveBeenCalledWith('timer', 'first log');
  expect(console.timeLog).toHaveBeenCalledWith('timer', 'second log');
  expect(console.timeEnd).toHaveBeenCalledWith('timer');
});

async function getMockedConsole() {
  vi.stubGlobal('console', {
    ...console,
    error: vi.fn(),
    info: vi.fn(),
    log: vi.fn(),
    time: vi.fn(),
    timeEnd: vi.fn(),
    timeLog: vi.fn(),
    warn: vi.fn(),
  });
  return await import('./index.js');
}
