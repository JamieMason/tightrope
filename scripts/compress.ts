import { readFileSync, writeFileSync } from "fs";
import { glob } from "glob";
import { minify } from "terser";

(async () => {
  const numberFormat = new Intl.NumberFormat('en-GB');
  const filePaths = await glob("dist/**/*.js", {
    cwd: process.cwd(),
  });
  let total = 0;
  await Promise.all(
    filePaths.map(async (filePath) => {
      const contents = readFileSync(filePath, "utf8");
      const minified = await minify(contents);
      if (!minified.code) throw new Error(filePath);
      const charCount = minified.code.length;
      console.log("%s (%sb)", filePath, numberFormat.format(charCount));
      total += charCount;
      writeFileSync(filePath, minified.code);
    }),
  );

  console.log("total (%sb)", numberFormat.format(total));
})();
