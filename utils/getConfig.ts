import fs from 'fs';
import path from 'path';

function getAbsolutePath(folder: string): string {
  return `${__dirname}/../docs/${folder}`;
}

/**
 * screen child file name which under the specified folder. Only return extension name is '.md'
 * @param text nav item title
 * @param folderName specified folder name
 * @returns \{ title, children: [...fileName] }[]
 */
export function getNavConfig(text: string, folderName: string): NavbarConfig {
  const extension = ".md";
  const basePath = path.join(getAbsolutePath(folderName));

  const files: string[] = fs
    .readdirSync(basePath)
    .filter(
      (fileName: string) => {
        if (fileName.toLowerCase() === "readme.md") return false;

        return fs.statSync(path.join(basePath, fileName)).isFile() &&
          (path.extname(fileName)) === extension;
      }
    )
    .map((fileName: string) => `/${folderName}/${fileName}`);

  return [{ text, children: [...files] }];
}

// 

}
