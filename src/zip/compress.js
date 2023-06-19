import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const msgError = 'ZIP operation failed';

const compress = async () => {
  const gzip = createGzip();
  const src = createReadStream(`${_dirname}/files/fileToCompress.txt`);
  const dest = createWriteStream(`${_dirname}/files/archive.gz`);
  pipeline(src, gzip, dest, (err) => {
    if (err) {
      console.error(msgError);
    }
  });
};

await compress();
