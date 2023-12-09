import type { CurriedFunction } from './get-all-curried-functions';

export function getCombinations({
  args,
  arity,
  filePath,
  exportedName,
  typeParams,
  returnType,
}: CurriedFunction) {
  const pascalName = firstUp(exportedName);
  const generics = typeParams.length
    ? `<${typeParams.map((typeParam) => typeParam.getText())}>`
    : '';
  const typeName = `${pascalName}`;

  const p0 = args[0]?.getText() || '';
  const p1 = args[1]?.getText() || '';
  const p2 = args[2]?.getText() || '';
  const p3 = args[3]?.getText() || '';
  const p4 = args[4]?.getText() || '';
  const p5 = args[5]?.getText() || '';
  const p6 = args[6]?.getText() || '';
  const r = returnType.getText();

  const log = (msg: string) =>
    console.log(msg.split(/import\("[^"]+"\)\./g).join(''));

  log(filePath);

  if (arity.curried === 2) {
    log(`export type ${typeName} = ${curry2Generic(p0, p1, r)}`);
  } else if (arity.curried === 3) {
    log(`export type ${typeName} = ${curry3Generic(p0, p1, p2, r)}`);
  } else if (arity.curried === 4) {
    log(`export type ${typeName} = ${curry4Generic(p0, p1, p2, p3, r)}`);
  } else if (arity.curried === 5) {
    log(`export type ${typeName} = ${curry5Generic(p0, p1, p2, p3, p4, r)}`);
  } else if (arity.curried === 6) {
    log(
      `export type ${typeName} = ${curry6Generic(p0, p1, p2, p3, p4, p5, r)}`,
    );
  } else if (arity.curried === 7) {
    log(
      `export type ${typeName} = ${curry7Generic(
        p0,
        p1,
        p2,
        p3,
        p4,
        p5,
        p6,
        r,
      )}`,
    );
  }

  function curry2Generic(p0: string, p1: string, r: string) {
    return `{
      ${generics}(${p0}): {(${p1}): ${r}}
      ${generics}(${p0}, ${p1}): ${r}
    }`;
  }

  function curry3Generic(p0: string, p1: string, p2: string, r: string) {
    return `{
      ${generics}(${p0}, ${p1}, ${p2}): ${r}
      ${generics}(${p0}, ${p1}): {(${p2}): ${r}}
      ${generics}(${p0}): ${curry2Generic(p1, p2, r)}
    }`;
  }

  function curry4Generic(
    p0: string,
    p1: string,
    p2: string,
    p3: string,
    r: string,
  ) {
    return `{
      ${generics}(${p0}, ${p1}, ${p2}, ${p3}): ${r}
      ${generics}(${p0}, ${p1}, ${p2}): {(${p3}): ${r}}
      ${generics}(${p0}, ${p1}): ${curry2Generic(p2, p3, r)}
      ${generics}(${p0}): ${curry3Generic(p1, p2, p3, r)}
    }`;
  }

  function curry5Generic(
    p0: string,
    p1: string,
    p2: string,
    p3: string,
    p4: string,
    r: string,
  ) {
    return `{
      ${generics}(${p0}, ${p1}, ${p2}, ${p3}, ${p4}): ${r}
      ${generics}(${p0}, ${p1}, ${p2}, ${p3}): {(${p4}): ${r}}
      ${generics}(${p0}, ${p1}, ${p2}): ${curry2Generic(p3, p4, r)}
      ${generics}(${p0}, ${p1}): ${curry3Generic(p2, p3, p4, r)}
      ${generics}(${p0}): ${curry4Generic(p1, p2, p3, p4, r)}
    }`;
  }

  function curry6Generic(
    p0: string,
    p1: string,
    p2: string,
    p3: string,
    p4: string,
    p5: string,
    r: string,
  ) {
    return `{
      ${generics}(${p0}, ${p1}, ${p2}, ${p3}, ${p4}, ${p5}): ${r}
      ${generics}(${p0}, ${p1}, ${p2}, ${p3}, ${p4}): {(${p5}): ${r}}
      ${generics}(${p0}, ${p1}, ${p2}, ${p3}): ${curry2Generic(p4, p5, r)}
      ${generics}(${p0}, ${p1}, ${p2}): ${curry3Generic(p3, p4, p5, r)}
      ${generics}(${p0}, ${p1}): ${curry4Generic(p2, p3, p4, p5, r)}
      ${generics}(${p0}): ${curry5Generic(p1, p2, p3, p4, p5, r)}
    }`;
  }

  function curry7Generic(
    p0: string,
    p1: string,
    p2: string,
    p3: string,
    p4: string,
    p5: string,
    p6: string,
    r: string,
  ) {
    return `{
      ${generics}(${p0}, ${p1}, ${p2}, ${p3}, ${p4}, ${p5}, ${p6}): ${r}
      ${generics}(${p0}, ${p1}, ${p2}, ${p3}, ${p4}, ${p5}): {(${p6}): ${r}}
      ${generics}(${p0}, ${p1}, ${p2}, ${p3}, ${p4}): ${curry2Generic(
        p5,
        p6,
        r,
      )}
      ${generics}(${p0}, ${p1}, ${p2}, ${p3}): ${curry3Generic(p4, p5, p6, r)}
      ${generics}(${p0}, ${p1}, ${p2}): ${curry4Generic(p3, p4, p5, p6, r)}
      ${generics}(${p0}, ${p1}): ${curry5Generic(p2, p3, p4, p5, p6, r)}
      ${generics}(${p0}): ${curry6Generic(p1, p2, p3, p4, p5, p6, r)}
    }`;
  }

  function firstUp(str: string): string {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }
}
