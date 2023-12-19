@genType
type onMaybe<'a, 'b> = {
  map: 'a => 'b,
  orElse: unit => 'b,
}

/**
 * Unwraps a `Maybe`, yielding the content of a `Just` or the return value of the provided function in case of a `Nothing`.
 *
 * @tags maybe, transform, transform-maybe, right-biased, unwrap, result
 */
@genType
let mapOrElse = (on: onMaybe<'a, 'b>) => (val: Maybe.maybe<'a>) =>
  switch val {
  | Maybe.Just(value) => on.map(value)
  | Maybe.Nothing(_) => on.orElse()
  }
