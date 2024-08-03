const apply =
  (method: 'error' | 'info' | 'log' | 'warn') => (template: string) =>
    console[method].bind(console, template);

export const error = apply('error');
export const info = apply('info');
export const log = apply('log');
export const warn = apply('warn');
export { timer } from './timer.js';
