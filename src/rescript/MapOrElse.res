// let {onMaybe, maybe, just, nothing} = module(Maybe)

/**
 * Unwraps a `Maybe`, yielding the content of a `Just` or the return value of the provided function in case of a `Nothing`.
 *
 * @tags maybe, transform, transform-maybe, right-biased, unwrap, result
 */
@genType
let mapOrElse = (branch: Maybe.onMaybe<'a, 'b>) => (val: Maybe.maybe<'a>) =>
  switch val {
  | Maybe.Just(value) => branch.map(value)
  | Maybe.Nothing(_) => branch.orElse()
  }
