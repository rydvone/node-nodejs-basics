import { writeFile } from 'node:fs/promises';

const create = async () => {
  const msgError = 'FS operation failed';
  const data = 'I am fresh and young';
  const filePath = new URL('./files/fresh.txt', import.meta.url);

  try {
    await writeFile(filePath, data, { flag: 'wx' });
  } catch (err) {
    console.error(msgError);
  }
};

await create();
