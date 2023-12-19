@genType
let pipe = (value, ~fn1, ~fn2, ~fn3, ~fn4, ~fn5, ~fn6, ~fn7) =>
  if Js.typeof(fn7) == "function" {
    value->fn1->fn2->fn3->fn4->fn5->fn6->fn7
  } else if Js.typeof(fn6) == "function" {
    value->fn1->fn2->fn3->fn4->fn5->fn6
  } else if Js.typeof(fn5) == "function" {
    value->fn1->fn2->fn3->fn4->fn5
  } else if Js.typeof(fn4) == "function" {
    value->fn1->fn2->fn3->fn4
  } else if Js.typeof(fn3) == "function" {
    value->fn1->fn2->fn3
  } else if Js.typeof(fn2) == "function" {
    value->fn1->fn2
  } else if Js.typeof(fn1) == "function" {
    fn1(value)
  } else {
    value
  }
