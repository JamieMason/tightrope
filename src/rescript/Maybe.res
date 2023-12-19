@genType
type maybe<'a> =
  | Just('a)
  | Nothing(int)

@genType
let just = value => Just(value)

@genType
let nothing = Nothing(0)
