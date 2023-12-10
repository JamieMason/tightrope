/* Generate all the function overload types for get() */

function generateTypesForGet(name: string, returnType: string) {
  [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((i) => {
    const fullGenerics: string[] = [];
    const generics: string[] = [];
    const args: string[] = [];

    let previous = 'T';

    for (let ii = 1; ii <= i + 1; ii++) {
      const bracket = ii === 1 ? '' : `[P${ii - 1}]`;
      const generic = `${previous}${bracket}`;
      previous = `NonNullable<${generic}>`;
      generics.push(generic);
      fullGenerics.push(`P${ii} extends keyof ${previous}`);
      args.push(`prop${ii}: P${ii}`);
    }

    const [returnValue = ''] = generics.slice(-1);

    console.log(`// prettier-ignore
export function ${name}<
  T,
  ${fullGenerics.slice(0, -1).join(',\n  ')}
>(
  obj: T,
  ${args.slice(0, -1).join(',\n  ')}
): ${returnType.replace('%s', returnValue)};
  `);
  });
}

console.log('='.repeat(80));
console.log('get:');
generateTypesForGet('get', 'Result<%s, Error>');
