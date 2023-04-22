/**
 * ...
 *
 * @tags console
 */
export function createTimer(id: string) {
  return {
    start() {
      console.time(id);
    },
    stop() {
      console.timeEnd(id);
    },
    log(msg: string) {
      return () => console.timeLog(id, msg);
    },
  };
}
