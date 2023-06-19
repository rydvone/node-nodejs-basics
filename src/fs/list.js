import { readdir } from 'node:fs/promises';

const list = async () => {
  const msgError = 'FS operation failed';
  const srcPath = new URL('./files', import.meta.url);
  try {
    const files = await readdir(srcPath);
    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    console.error(msgError);
  }
};

await list();
