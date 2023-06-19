import { createReadStream } from 'node:fs';

const msgError = 'STREAMS operation failed';
const filePath = new URL('./files/fileToRead.txt', import.meta.url);

const read = async () => {
  try {
    const inputStream = createReadStream(filePath, { encoding: 'utf8' });
    inputStream.on('data', (ch) => process.stdout.write(ch));
    inputStream.on('end', () => process.exit(0));
    inputStream.on('error', (err) => {
      console.error(msgError);
    });
  } catch (err) {
    console.error(msgError);
  }
};

await read();