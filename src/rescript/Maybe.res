@genType
type maybe<'a> =
  | Just('a)
  | Nothing(int)

@genType
let mapOrElse = (onJust, onNothing, val) =>
  switch val {
  | Just(value) => onJust(value)
  | Nothing(_) => onNothing()
  }

@genType
let andThen = (onJust, onNothing, val) =>
  switch val {
  | Just(value) => onJust(value)
  | Nothing(_) => onNothing()
  }
