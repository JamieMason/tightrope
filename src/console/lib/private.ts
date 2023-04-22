type ConsoleMethod =
  | 'error'
  | 'info'
  | 'log'
  | 'time'
  | 'timeEnd'
  | 'timeLog'
  | 'warn';

/** @private */
export const apply = (method: ConsoleMethod) => (template: string) => {
  return console[method].bind(console, template);
};
