import { rm } from 'node:fs/promises';

const remove = async () => {
  const msgError = 'FS operation failed';
  const filePath = new URL('./files/fileToRemove.txt', import.meta.url);

  try {
    await rm(filePath);
  } catch (err) {
    console.error(msgError);
  }
};

await remove();
