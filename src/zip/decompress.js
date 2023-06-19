import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const msgError = 'ZIP operation failed';

const decompress = async () => {
  const unzip = createUnzip();
  const dest = createWriteStream(`${_dirname}/files/fileToCompress.txt`);
  const src = createReadStream(`${_dirname}/files/archive.gz`);
  pipeline(src, unzip, dest, (err) => {
    if (err) {
      console.error(msgError);
    }
  });
};

await decompress();
