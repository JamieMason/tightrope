/**
 * Combines two `Maybe`s, returning the second `Maybe` if both are `Just`, and `Nothing` otherwise.
 *
 * @tags maybe, transform, transform-maybe
 */
@genType
let \"and" = (a, b) => isJust(a) ? b : Maybe.nothing
