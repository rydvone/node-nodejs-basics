import { rename as rn, access, constants } from 'node:fs/promises';

const rename = async () => {
  const msgError = 'FS operation failed';
  const oldFile = new URL('./files/wrongFilename.txt', import.meta.url);
  const newFile = new URL('./files/properFilename.md', import.meta.url);

  try {
    await access(newFile, constants.F_OK);
    console.error(msgError);
  } catch (err) {
    try {
      await rn(oldFile, newFile);
    } catch (err) {
      console.error(msgError);
    }
  }
};

await rename();
