import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';
import { resolve } from 'path';
import { minify } from 'terser';

(async () => {
  const numberFormat = new Intl.NumberFormat('en-GB');
  const CWD = process.cwd();
  const filePaths = await glob('dist/**/*.js', { cwd: CWD });
  let total = 0;

  await Promise.all(
    filePaths.map(async (filePath) => {
      const contents = readFileSync(filePath, 'utf8');
      const minified = await minify(contents);
      if (!minified.code) throw new Error(filePath);
      const charCount = minified.code.length;
      console.log('%s (%sb)', filePath, numberFormat.format(charCount));
      total += charCount;
      writeFileSync(filePath, minified.code);
    }),
  );

  console.log('total (%sb)', numberFormat.format(total));

  const srcPath = resolve(CWD, 'package.json');
  const destPath = resolve(CWD, 'dist/package.json');

  const pkg = JSON.parse(readFileSync(srcPath, 'utf8'));
  delete pkg.scripts.prepack;
  writeFileSync(destPath, JSON.stringify(pkg, null, 2));
})();
