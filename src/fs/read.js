import { readFile } from 'node:fs/promises';

const read = async () => {
  const msgError = 'FS operation failed';
  const filePath = new URL('./files/fileToRead.txt', import.meta.url);
  try {
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(msgError);
  }
};

await read();
