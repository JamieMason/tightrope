/**
 * Returns true if the given value is a `Nothing` instance, false otherwise.
 *
 * @tags maybe, guard, errors
 */
@genType
let isNothing = %raw("value => value?.TAG === 'Nothing'")
