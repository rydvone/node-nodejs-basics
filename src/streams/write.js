import { createWriteStream } from 'node:fs';

const filePath = new URL('./files/fileToWrite.txt', import.meta.url);

const write = async () => {
  const outStream = createWriteStream(filePath);
  process.stdin.on('data', (line) => {
      outStream.write(line);
  });
};

await write();