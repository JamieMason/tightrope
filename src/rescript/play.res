let maybeNumber = Maybe.Just(35)
let none = Maybe.Nothing(0)

let fn = val => {
  switch val {
  | Maybe.Just(value) => Js.log(`Just(${Belt.Int.toString(value)})`)
  | Maybe.Nothing(_) => Js.log("Nothing")
  }
}

fn(maybeNumber)
fn(none)

let full = Maybe.mapOrElse(val => val + 1, () => 0, maybeNumber)

let mapper = Maybe.mapOrElse(val => val + 1, () => 0)

Js.log(mapper(maybeNumber))
