import { expect, it } from 'vitest';
import { just, nothing } from '../rescript/Maybe.gen';
import { mapOrElse } from '../rescript/MapOrElse.gen';

it('mapOrElse applies map when input is Some', () => {
  const opt = just(2);
  const map = (x: number) => x * 2;
  const orElse = () => -1;
  expect(mapOrElse({ map, orElse })(opt)).toEqual(4);
});

it('mapOrElse applies orElse when input is None', () => {
  const map = (x: number) => x * 2;
  const orElse = () => -1;
  expect(mapOrElse({ map, orElse })(nothing)).toEqual(-1);
});

it('mapOrElse handles complex types', () => {
  const opt = just({ value: 2 });
  const map = (obj: { value: number }) => obj.value * 2;
  const orElse = () => -1;
  expect(mapOrElse({ map, orElse })(opt)).toEqual(4);
});
