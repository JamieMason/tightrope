/**
 * Applies a mapping function to the value of an `Maybe`, returning a new `Maybe`. If the input `Maybe` is `Nothing`,
 * the function immediately returns `Nothing` without calling the mapping function.
 *
 * @tags maybe, transform, transform-maybe, right-biased
 */
@genType
let andThen = (map: 'a => Maybe.maybe<'b>) => (val: Maybe.maybe<'a>) =>
  switch val {
  | Maybe.Just(value) => map(value)
  | _ => Maybe.nothing
  }
