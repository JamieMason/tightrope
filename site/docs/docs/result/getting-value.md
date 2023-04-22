---
id: get-value
title: Get value from a Result
tags: [result, unwrap, guides]
---

A guide to all the different ways to extract a value from inside a `Result`.

The following methods will extract values which are contained within a
[`Result`](/tightrope/api/result):

1. [`expect`](/tightrope/api/result/expect)
1. [`expectErr`](/tightrope/api/result/expect-err)
1. [`match`](/tightrope/api/result/match)
1. [`unwrap`](/tightrope/api/result/unwrap)
1. [`unwrapErr`](/tightrope/api/result/unwrap-err)
1. [`unwrapOr`](/tightrope/api/result/unwrap-or)
1. [`unwrapOrElse`](/tightrope/api/result/unwrap-or-else)

When choosing between these functions, it's important to consider the specific
needs of your code and the type of `Result` you are working with.

- If you want to extract the `Ok` value from a `Result`, you can use
  [`unwrap`](/tightrope/api/result/unwrap) or
  [`expect`](/tightrope/api/result/expect). The difference is that `expect`
  allows you to provide a custom error message if the `Result` is an `Err`,
  while `unwrap` will throw a generic error message if the `Result` is an `Err`.
- If you want to extract the `Err` value from a `Result`, you can use
  [`unwrapErr`](/tightrope/api/result/unwrap-err) or
  [`expectErr`](/tightrope/api/result/expect-err). Again, the difference is that
  `expectErr` allows you to provide a custom error message if the `Result` is an
  `Ok`, while `unwrapErr` will throw a generic error message if the `Result` is
  an `Ok`.
- If you want to unwrap a `Result` to either its `Ok` value or a fallback value,
  you can use [`unwrapOr`](/tightrope/api/result/unwrap-or).
- If you want to unwrap a `Result` to either its `Ok` value or a value returned
  by a function, you can use
  [`unwrapOrElse`](/tightrope/api/result/unwrap-or-else).
- If you want to perform different operations depending on whether a `Result` is
  an `Ok` or an `Err`, you can use [`match`](/tightrope/api/result/match).

In general, the choice of which function to use depends on the specific
requirements of your code. It's important to consider how you want to handle
errors, whether you need to provide custom error messages, and whether you need
to provide fallback values.
