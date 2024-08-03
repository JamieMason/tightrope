interface ConsoleTimer {
  start: () => void;
  stop: () => void;
  log: (msg: string) => () => void;
}

/**
 * Create a timer that can be started, stopped, and logged to the console.
 */
export const timer = (id: string): ConsoleTimer => {
  return {
    start: () => console.time(id),
    stop: () => console.timeEnd(id),
    log: (msg: string) => () => console.timeLog(id, msg),
  };
};
