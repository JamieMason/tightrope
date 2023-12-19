@genType
type maybe<'a> =
  | Just('a)
  | Nothing(int)

@genType
let just = value => Just(value)

@genType
let nothing = Nothing(0)

@genType
type onMaybe<'a, 'b> = {
  map: 'a => 'b,
  orElse: unit => 'b,
}

/** A function used in .map() */
@genType
type mapFn<'a, 'b> = 'a => 'b

/** A function used in .flatMap()/.chain()/.andThen() */
@genType
type andThenFn<'a, 'b> = mapFn<'a, maybe<'b>>

/**
 * Applies a mapping function to the value of an `Maybe`, returning a new `Maybe`. If the input `Maybe` is `Nothing`,
 * the function immediately returns `Nothing` without calling the mapping function.
 *
 * @tags maybe, transform, transform-maybe, right-biased
 */
@genType
let andThen = (map: mapFn<'a, maybe<'b>>) => (val: maybe<'a>) =>
  switch val {
  | Just(value) => map(value)
  | _ => nothing
  }
