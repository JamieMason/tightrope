/**
 * Returns true if the given value is a `Nothing` instance, false otherwise.
 *
 * @tags maybe, guard, errors
 */
@genType
let isNothing = value => {
  switch value {
  | Maybe.Nothing(_) => true
  | _ => false
  }
}
