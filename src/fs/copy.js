import { readdir, copyFile, mkdir } from 'node:fs/promises';

const copy = async () => {
  const msgError = 'FS operation failed';
  const src = new URL('./files', import.meta.url);
  const dest = new URL('./files_copy', import.meta.url);

  try {
    await mkdir(dest, { recursive: false });
    const files = await readdir(src);
    for (const file of files) {
      const fromPath = new URL(`./files/${file}`, import.meta.url);
      const destPath = new URL(`./files_copy/${file}`, import.meta.url);
      await copyFile(fromPath, destPath);
    }
  } catch (err) {
    console.error(msgError);
  }
};
await copy();
