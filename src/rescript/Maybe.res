@genType
type maybe<'a> =
  | Just('a)
  | Nothing(int)

// type branch = {
//   onJust: 'a => 'b,
//   onNothing: unit => 'b,
// }

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

@genType
let just = value => Just(value)

@genType
let nothing = Nothing(0)
