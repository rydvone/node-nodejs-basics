import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const calculateHash = async () => {
  const msgError = 'HASH operation failed';
  const filePath = new URL(
    './files/fileToCalculateHashFor.txt',
    import.meta.url
  );
  const hash = createHash('sha256');
  try {
    const contentFoHash = await readFile(filePath);
    hash.update(contentFoHash);
    console.log(hash.digest('hex'));
  } catch (err) {
    console.error(msgError);
  }
};

await calculateHash();
