let a = Maybe.Just(35)
let b = Maybe.Nothing(0)

let fn = val => {
  switch val {
  | Maybe.Just(value) => Js.log(`Just(${Belt.Int.toString(value)})`)
  | Maybe.Nothing(_) => Js.log("Nothing")
  }
}

fn(a)
fn(b)

Js.log(Maybe.mapOrElse(val => val + 1, () => 0, a))
