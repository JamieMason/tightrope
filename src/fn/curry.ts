import type { AnyFn } from './types';

export type CurriedFn2<Fn extends AnyFn> = {
  (a: Parameters<Fn>[0]): {
    (b: Parameters<Fn>[1]): ReturnType<Fn>;
  };
  (a: Parameters<Fn>[0], b: Parameters<Fn>[1]): ReturnType<Fn>;
};

export type CurriedFn3<Fn extends AnyFn> = {
  (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
  ): ReturnType<Fn>;
  (a: Parameters<Fn>[0], b: Parameters<Fn>[1]): {
    (c: Parameters<Fn>[2]): ReturnType<Fn>;
  };
  (a: Parameters<Fn>[0]): {
    (b: Parameters<Fn>[1]): {
      (c: Parameters<Fn>[2]): ReturnType<Fn>;
    };
    (b: Parameters<Fn>[1], c: Parameters<Fn>[2]): ReturnType<Fn>;
  };
};

export type CurriedFn4<Fn extends AnyFn> = {
  (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
    d: Parameters<Fn>[3],
  ): ReturnType<Fn>;
  (a: Parameters<Fn>[0], b: Parameters<Fn>[1], c: Parameters<Fn>[2]): {
    (d: Parameters<Fn>[3]): ReturnType<Fn>;
  };
  (a: Parameters<Fn>[0], b: Parameters<Fn>[1]): {
    (c: Parameters<Fn>[2]): {
      (d: Parameters<Fn>[3]): ReturnType<Fn>;
    };
    (c: Parameters<Fn>[2], d: Parameters<Fn>[3]): ReturnType<Fn>;
  };
  (a: Parameters<Fn>[0]): {
    (
      b: Parameters<Fn>[1],
      c: Parameters<Fn>[2],
      d: Parameters<Fn>[3],
    ): ReturnType<Fn>;
    (b: Parameters<Fn>[1], c: Parameters<Fn>[2]): {
      (d: Parameters<Fn>[3]): ReturnType<Fn>;
    };
    (b: Parameters<Fn>[1]): {
      (c: Parameters<Fn>[2]): {
        (d: Parameters<Fn>[3]): ReturnType<Fn>;
      };
      (c: Parameters<Fn>[2], d: Parameters<Fn>[3]): ReturnType<Fn>;
    };
  };
};

export type CurriedFn5<Fn extends AnyFn> = {
  (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
    d: Parameters<Fn>[3],
    e: Parameters<Fn>[4],
  ): ReturnType<Fn>;
  (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
    d: Parameters<Fn>[3],
  ): {
    (e: Parameters<Fn>[4]): ReturnType<Fn>;
  };
  (a: Parameters<Fn>[0], b: Parameters<Fn>[1], c: Parameters<Fn>[2]): {
    (d: Parameters<Fn>[3]): {
      (e: Parameters<Fn>[4]): ReturnType<Fn>;
    };
    (d: Parameters<Fn>[3], e: Parameters<Fn>[4]): ReturnType<Fn>;
  };
  (a: Parameters<Fn>[0], b: Parameters<Fn>[1]): {
    (
      c: Parameters<Fn>[2],
      d: Parameters<Fn>[3],
      e: Parameters<Fn>[4],
    ): ReturnType<Fn>;
    (c: Parameters<Fn>[2], d: Parameters<Fn>[3]): {
      (e: Parameters<Fn>[4]): ReturnType<Fn>;
    };
    (c: Parameters<Fn>[2]): {
      (d: Parameters<Fn>[3]): {
        (e: Parameters<Fn>[4]): ReturnType<Fn>;
      };
      (d: Parameters<Fn>[3], e: Parameters<Fn>[4]): ReturnType<Fn>;
    };
  };
  (a: Parameters<Fn>[0]): {
    (
      b: Parameters<Fn>[1],
      c: Parameters<Fn>[2],
      d: Parameters<Fn>[3],
      e: Parameters<Fn>[4],
    ): ReturnType<Fn>;
    (b: Parameters<Fn>[1], c: Parameters<Fn>[2], d: Parameters<Fn>[3]): {
      (e: Parameters<Fn>[4]): ReturnType<Fn>;
    };
    (b: Parameters<Fn>[1], c: Parameters<Fn>[2]): {
      (d: Parameters<Fn>[3]): {
        (e: Parameters<Fn>[4]): ReturnType<Fn>;
      };
      (d: Parameters<Fn>[3], e: Parameters<Fn>[4]): ReturnType<Fn>;
    };
    (b: Parameters<Fn>[1]): {
      (
        c: Parameters<Fn>[2],
        d: Parameters<Fn>[3],
        e: Parameters<Fn>[4],
      ): ReturnType<Fn>;
      (c: Parameters<Fn>[2], d: Parameters<Fn>[3]): {
        (e: Parameters<Fn>[4]): ReturnType<Fn>;
      };
      (c: Parameters<Fn>[2]): {
        (d: Parameters<Fn>[3]): {
          (e: Parameters<Fn>[4]): ReturnType<Fn>;
        };
        (d: Parameters<Fn>[3], e: Parameters<Fn>[4]): ReturnType<Fn>;
      };
    };
  };
};

export type CurriedFn6<Fn extends AnyFn> = {
  (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
    d: Parameters<Fn>[3],
    e: Parameters<Fn>[4],
    f: Parameters<Fn>[5],
  ): ReturnType<Fn>;
  (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
    d: Parameters<Fn>[3],
    e: Parameters<Fn>[4],
  ): { (f: Parameters<Fn>[5]): ReturnType<Fn> };
  (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
    d: Parameters<Fn>[3],
  ): {
    (e: Parameters<Fn>[4]): {
      (f: Parameters<Fn>[5]): ReturnType<Fn>;
    };
    (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): ReturnType<Fn>;
  };
  (a: Parameters<Fn>[0], b: Parameters<Fn>[1], c: Parameters<Fn>[2]): {
    (
      d: Parameters<Fn>[3],
      e: Parameters<Fn>[4],
      f: Parameters<Fn>[5],
    ): ReturnType<Fn>;
    (d: Parameters<Fn>[3], e: Parameters<Fn>[4]): {
      (f: Parameters<Fn>[5]): ReturnType<Fn>;
    };
    (d: Parameters<Fn>[3]): {
      (e: Parameters<Fn>[4]): {
        (f: Parameters<Fn>[5]): ReturnType<Fn>;
      };
      (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): ReturnType<Fn>;
    };
  };
  (a: Parameters<Fn>[0], b: Parameters<Fn>[1]): {
    (
      c: Parameters<Fn>[2],
      d: Parameters<Fn>[3],
      e: Parameters<Fn>[4],
      f: Parameters<Fn>[5],
    ): ReturnType<Fn>;
    (c: Parameters<Fn>[2], d: Parameters<Fn>[3], e: Parameters<Fn>[4]): {
      (f: Parameters<Fn>[5]): ReturnType<Fn>;
    };
    (c: Parameters<Fn>[2], d: Parameters<Fn>[3]): {
      (e: Parameters<Fn>[4]): {
        (f: Parameters<Fn>[5]): ReturnType<Fn>;
      };
      (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): ReturnType<Fn>;
    };
    (c: Parameters<Fn>[2]): {
      (
        d: Parameters<Fn>[3],
        e: Parameters<Fn>[4],
        f: Parameters<Fn>[5],
      ): ReturnType<Fn>;
      (d: Parameters<Fn>[3], e: Parameters<Fn>[4]): {
        (f: Parameters<Fn>[5]): ReturnType<Fn>;
      };
      (d: Parameters<Fn>[3]): {
        (e: Parameters<Fn>[4]): {
          (f: Parameters<Fn>[5]): ReturnType<Fn>;
        };
        (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): ReturnType<Fn>;
      };
    };
  };
  (a: Parameters<Fn>[0]): {
    (
      b: Parameters<Fn>[1],
      c: Parameters<Fn>[2],
      d: Parameters<Fn>[3],
      e: Parameters<Fn>[4],
      f: Parameters<Fn>[5],
    ): ReturnType<Fn>;
    (
      b: Parameters<Fn>[1],
      c: Parameters<Fn>[2],
      d: Parameters<Fn>[3],
      e: Parameters<Fn>[4],
    ): {
      (f: Parameters<Fn>[5]): ReturnType<Fn>;
    };
    (b: Parameters<Fn>[1], c: Parameters<Fn>[2], d: Parameters<Fn>[3]): {
      (e: Parameters<Fn>[4]): {
        (f: Parameters<Fn>[5]): ReturnType<Fn>;
      };
      (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): ReturnType<Fn>;
    };
    (b: Parameters<Fn>[1], c: Parameters<Fn>[2]): {
      (
        d: Parameters<Fn>[3],
        e: Parameters<Fn>[4],
        f: Parameters<Fn>[5],
      ): ReturnType<Fn>;
      (d: Parameters<Fn>[3], e: Parameters<Fn>[4]): {
        (f: Parameters<Fn>[5]): ReturnType<Fn>;
      };
      (d: Parameters<Fn>[3]): {
        (e: Parameters<Fn>[4]): {
          (f: Parameters<Fn>[5]): ReturnType<Fn>;
        };
        (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): ReturnType<Fn>;
      };
    };
    (b: Parameters<Fn>[1]): {
      (
        c: Parameters<Fn>[2],
        d: Parameters<Fn>[3],
        e: Parameters<Fn>[4],
        f: Parameters<Fn>[5],
      ): ReturnType<Fn>;
      (c: Parameters<Fn>[2], d: Parameters<Fn>[3], e: Parameters<Fn>[4]): {
        (f: Parameters<Fn>[5]): ReturnType<Fn>;
      };
      (c: Parameters<Fn>[2], d: Parameters<Fn>[3]): {
        (e: Parameters<Fn>[4]): {
          (f: Parameters<Fn>[5]): ReturnType<Fn>;
        };
        (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): ReturnType<Fn>;
      };
      (c: Parameters<Fn>[2]): {
        (
          d: Parameters<Fn>[3],
          e: Parameters<Fn>[4],
          f: Parameters<Fn>[5],
        ): ReturnType<Fn>;
        (d: Parameters<Fn>[3], e: Parameters<Fn>[4]): {
          (f: Parameters<Fn>[5]): ReturnType<Fn>;
        };
        (d: Parameters<Fn>[3]): {
          (e: Parameters<Fn>[4]): {
            (f: Parameters<Fn>[5]): ReturnType<Fn>;
          };
          (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): ReturnType<Fn>;
        };
      };
    };
  };
};

export type CurriedFn7<Fn extends AnyFn> = {
  (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
    d: Parameters<Fn>[3],
    e: Parameters<Fn>[4],
    f: Parameters<Fn>[5],
    g: Parameters<Fn>[6],
  ): ReturnType<Fn>;
  (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
    d: Parameters<Fn>[3],
    e: Parameters<Fn>[4],
    f: Parameters<Fn>[5],
  ): { (g: Parameters<Fn>[6]): ReturnType<Fn> };
  (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
    d: Parameters<Fn>[3],
    e: Parameters<Fn>[4],
  ): {
    (f: Parameters<Fn>[5]): {
      (g: Parameters<Fn>[6]): ReturnType<Fn>;
    };
    (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
  };
  (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
    d: Parameters<Fn>[3],
  ): {
    (
      e: Parameters<Fn>[4],
      f: Parameters<Fn>[5],
      g: Parameters<Fn>[6],
    ): ReturnType<Fn>;
    (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): {
      (g: Parameters<Fn>[6]): ReturnType<Fn>;
    };
    (e: Parameters<Fn>[4]): {
      (f: Parameters<Fn>[5]): {
        (g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
      (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
    };
  };
  (a: Parameters<Fn>[0], b: Parameters<Fn>[1], c: Parameters<Fn>[2]): {
    (
      d: Parameters<Fn>[3],
      e: Parameters<Fn>[4],
      f: Parameters<Fn>[5],
      g: Parameters<Fn>[6],
    ): ReturnType<Fn>;
    (d: Parameters<Fn>[3], e: Parameters<Fn>[4], f: Parameters<Fn>[5]): {
      (g: Parameters<Fn>[6]): ReturnType<Fn>;
    };
    (d: Parameters<Fn>[3], e: Parameters<Fn>[4]): {
      (f: Parameters<Fn>[5]): {
        (g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
      (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
    };
    (d: Parameters<Fn>[3]): {
      (
        e: Parameters<Fn>[4],
        f: Parameters<Fn>[5],
        g: Parameters<Fn>[6],
      ): ReturnType<Fn>;
      (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): {
        (g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
      (e: Parameters<Fn>[4]): {
        (f: Parameters<Fn>[5]): {
          (g: Parameters<Fn>[6]): ReturnType<Fn>;
        };
        (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
    };
  };
  (a: Parameters<Fn>[0], b: Parameters<Fn>[1]): {
    (
      c: Parameters<Fn>[2],
      d: Parameters<Fn>[3],
      e: Parameters<Fn>[4],
      f: Parameters<Fn>[5],
      g: Parameters<Fn>[6],
    ): ReturnType<Fn>;
    (
      c: Parameters<Fn>[2],
      d: Parameters<Fn>[3],
      e: Parameters<Fn>[4],
      f: Parameters<Fn>[5],
    ): {
      (g: Parameters<Fn>[6]): ReturnType<Fn>;
    };
    (c: Parameters<Fn>[2], d: Parameters<Fn>[3], e: Parameters<Fn>[4]): {
      (f: Parameters<Fn>[5]): {
        (g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
      (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
    };
    (c: Parameters<Fn>[2], d: Parameters<Fn>[3]): {
      (
        e: Parameters<Fn>[4],
        f: Parameters<Fn>[5],
        g: Parameters<Fn>[6],
      ): ReturnType<Fn>;
      (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): {
        (g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
      (e: Parameters<Fn>[4]): {
        (f: Parameters<Fn>[5]): {
          (g: Parameters<Fn>[6]): ReturnType<Fn>;
        };
        (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
    };
    (c: Parameters<Fn>[2]): {
      (
        d: Parameters<Fn>[3],
        e: Parameters<Fn>[4],
        f: Parameters<Fn>[5],
        g: Parameters<Fn>[6],
      ): ReturnType<Fn>;
      (d: Parameters<Fn>[3], e: Parameters<Fn>[4], f: Parameters<Fn>[5]): {
        (g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
      (d: Parameters<Fn>[3], e: Parameters<Fn>[4]): {
        (f: Parameters<Fn>[5]): {
          (g: Parameters<Fn>[6]): ReturnType<Fn>;
        };
        (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
      (d: Parameters<Fn>[3]): {
        (
          e: Parameters<Fn>[4],
          f: Parameters<Fn>[5],
          g: Parameters<Fn>[6],
        ): ReturnType<Fn>;
        (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): {
          (g: Parameters<Fn>[6]): ReturnType<Fn>;
        };
        (e: Parameters<Fn>[4]): {
          (f: Parameters<Fn>[5]): {
            (g: Parameters<Fn>[6]): ReturnType<Fn>;
          };
          (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
        };
      };
    };
  };
  (a: Parameters<Fn>[0]): {
    (
      b: Parameters<Fn>[1],
      c: Parameters<Fn>[2],
      d: Parameters<Fn>[3],
      e: Parameters<Fn>[4],
      f: Parameters<Fn>[5],
      g: Parameters<Fn>[6],
    ): ReturnType<Fn>;
    (
      b: Parameters<Fn>[1],
      c: Parameters<Fn>[2],
      d: Parameters<Fn>[3],
      e: Parameters<Fn>[4],
      f: Parameters<Fn>[5],
    ): { (g: Parameters<Fn>[6]): ReturnType<Fn> };
    (
      b: Parameters<Fn>[1],
      c: Parameters<Fn>[2],
      d: Parameters<Fn>[3],
      e: Parameters<Fn>[4],
    ): {
      (f: Parameters<Fn>[5]): {
        (g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
      (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
    };
    (b: Parameters<Fn>[1], c: Parameters<Fn>[2], d: Parameters<Fn>[3]): {
      (
        e: Parameters<Fn>[4],
        f: Parameters<Fn>[5],
        g: Parameters<Fn>[6],
      ): ReturnType<Fn>;
      (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): {
        (g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
      (e: Parameters<Fn>[4]): {
        (f: Parameters<Fn>[5]): {
          (g: Parameters<Fn>[6]): ReturnType<Fn>;
        };
        (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
    };
    (b: Parameters<Fn>[1], c: Parameters<Fn>[2]): {
      (
        d: Parameters<Fn>[3],
        e: Parameters<Fn>[4],
        f: Parameters<Fn>[5],
        g: Parameters<Fn>[6],
      ): ReturnType<Fn>;
      (d: Parameters<Fn>[3], e: Parameters<Fn>[4], f: Parameters<Fn>[5]): {
        (g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
      (d: Parameters<Fn>[3], e: Parameters<Fn>[4]): {
        (f: Parameters<Fn>[5]): {
          (g: Parameters<Fn>[6]): ReturnType<Fn>;
        };
        (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
      (d: Parameters<Fn>[3]): {
        (
          e: Parameters<Fn>[4],
          f: Parameters<Fn>[5],
          g: Parameters<Fn>[6],
        ): ReturnType<Fn>;
        (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): {
          (g: Parameters<Fn>[6]): ReturnType<Fn>;
        };
        (e: Parameters<Fn>[4]): {
          (f: Parameters<Fn>[5]): {
            (g: Parameters<Fn>[6]): ReturnType<Fn>;
          };
          (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
        };
      };
    };
    (b: Parameters<Fn>[1]): {
      (
        c: Parameters<Fn>[2],
        d: Parameters<Fn>[3],
        e: Parameters<Fn>[4],
        f: Parameters<Fn>[5],
        g: Parameters<Fn>[6],
      ): ReturnType<Fn>;
      (
        c: Parameters<Fn>[2],
        d: Parameters<Fn>[3],
        e: Parameters<Fn>[4],
        f: Parameters<Fn>[5],
      ): {
        (g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
      (c: Parameters<Fn>[2], d: Parameters<Fn>[3], e: Parameters<Fn>[4]): {
        (f: Parameters<Fn>[5]): {
          (g: Parameters<Fn>[6]): ReturnType<Fn>;
        };
        (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
      };
      (c: Parameters<Fn>[2], d: Parameters<Fn>[3]): {
        (
          e: Parameters<Fn>[4],
          f: Parameters<Fn>[5],
          g: Parameters<Fn>[6],
        ): ReturnType<Fn>;
        (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): {
          (g: Parameters<Fn>[6]): ReturnType<Fn>;
        };
        (e: Parameters<Fn>[4]): {
          (f: Parameters<Fn>[5]): {
            (g: Parameters<Fn>[6]): ReturnType<Fn>;
          };
          (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
        };
      };
      (c: Parameters<Fn>[2]): {
        (
          d: Parameters<Fn>[3],
          e: Parameters<Fn>[4],
          f: Parameters<Fn>[5],
          g: Parameters<Fn>[6],
        ): ReturnType<Fn>;
        (d: Parameters<Fn>[3], e: Parameters<Fn>[4], f: Parameters<Fn>[5]): {
          (g: Parameters<Fn>[6]): ReturnType<Fn>;
        };
        (d: Parameters<Fn>[3], e: Parameters<Fn>[4]): {
          (f: Parameters<Fn>[5]): {
            (g: Parameters<Fn>[6]): ReturnType<Fn>;
          };
          (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
        };
        (d: Parameters<Fn>[3]): {
          (
            e: Parameters<Fn>[4],
            f: Parameters<Fn>[5],
            g: Parameters<Fn>[6],
          ): ReturnType<Fn>;
          (e: Parameters<Fn>[4], f: Parameters<Fn>[5]): {
            (g: Parameters<Fn>[6]): ReturnType<Fn>;
          };
          (e: Parameters<Fn>[4]): {
            (f: Parameters<Fn>[5]): {
              (g: Parameters<Fn>[6]): ReturnType<Fn>;
            };
            (f: Parameters<Fn>[5], g: Parameters<Fn>[6]): ReturnType<Fn>;
          };
        };
      };
    };
  };
};

/**
 * Convert a function into one that can be called multiple times with a subset of the total arguments.
 *
 * A higher-order function that takes a function as its first argument and an optional `arity` parameter indicating the
 * number of arguments that the function expects. It returns a new function that can be partially applied, meaning that
 * it can be called with some of its arguments, and then returns a new function that expects the remaining arguments.
 *
 * It takes two parameters, `fn` and `arity`. `fn` is of type `F`, which is a generic type parameter that extends
 * `AnyFn`. `AnyFn` is a type alias for a function that takes any number of arguments and returns any value. arity is
 * optional and defaults to `fn.length`, which is the number of arguments that `fn` expects.
 *
 * ## Example
 *
 * In this example, we first define a function add that takes 3 arguments and returns their sum. We then use the `curry`
 * function to create a new function `curriedAdd` that is a curried version of `add`. We can then call `curriedAdd` with
 * less than all of the arguments it expects, each time creating new functions that expect the remaining arguments.
 *
 * Finally, we call the final function with all arguments to get the result.
 *
 * ```ts
 * import { curry } from 'tightrope/fn/curry';
 *
 * // Define a function to be curried
 * function add(a: number, b: number, c: number): number {
 *   return a + b + c;
 * }
 *
 * // Use curry to create a new function that can be partially applied
 * const curriedAdd = curry(add);
 *
 * // Call the new function with partial arguments
 * const add1 = curriedAdd(1); // returns a new function that expects 2 more arguments
 * const add2 = add1(2); // returns a new function that expects 1 more argument
 *
 * // Call the final function with all arguments
 * const result = add2(3); // returns 6
 * ```
 *
 * @tags composition
 */
export function curry<Fn extends AnyFn>(
  fn: (a: Parameters<Fn>[0], b: Parameters<Fn>[1]) => ReturnType<Fn>,
): CurriedFn2<Fn>;

export function curry<Fn extends AnyFn>(
  fn: (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
  ) => ReturnType<Fn>,
): CurriedFn3<Fn>;

export function curry<Fn extends AnyFn>(
  fn: (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
    d: Parameters<Fn>[3],
  ) => ReturnType<Fn>,
): CurriedFn4<Fn>;

export function curry<Fn extends AnyFn>(
  fn: (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
    d: Parameters<Fn>[3],
    e: Parameters<Fn>[4],
  ) => ReturnType<Fn>,
): CurriedFn5<Fn>;

export function curry<Fn extends AnyFn>(
  fn: (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
    d: Parameters<Fn>[3],
    e: Parameters<Fn>[4],
    f: Parameters<Fn>[5],
  ) => ReturnType<Fn>,
): CurriedFn6<Fn>;

export function curry<Fn extends AnyFn>(
  fn: (
    a: Parameters<Fn>[0],
    b: Parameters<Fn>[1],
    c: Parameters<Fn>[2],
    d: Parameters<Fn>[3],
    e: Parameters<Fn>[4],
    f: Parameters<Fn>[5],
    g: Parameters<Fn>[6],
  ) => ReturnType<Fn>,
): CurriedFn7<Fn>;

export function curry<Fn extends AnyFn>(fn: AnyFn, arity: 2): CurriedFn2<Fn>;

export function curry<Fn extends AnyFn>(fn: AnyFn, arity: 3): CurriedFn3<Fn>;

export function curry<Fn extends AnyFn>(fn: AnyFn, arity: 4): CurriedFn4<Fn>;

export function curry<Fn extends AnyFn>(fn: AnyFn, arity: 5): CurriedFn5<Fn>;

export function curry<Fn extends AnyFn>(fn: AnyFn, arity: 6): CurriedFn6<Fn>;

export function curry<Fn extends AnyFn>(fn: AnyFn, arity: 7): CurriedFn7<Fn>;

export function curry<F extends AnyFn>(fn: F, arity = fn.length) {
  return function curriedFn(...args: any): any {
    if (args.length >= arity) {
      return fn(...args);
    }
    return curriedFn.bind(null, ...args);
  } as AnyFn;
}
