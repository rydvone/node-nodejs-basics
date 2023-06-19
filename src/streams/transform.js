import { Transform } from 'node:stream';

const msgError = 'STREAMS operation failed';

const transform = async () => {
  try {
    const reverseStream = new Transform({
      transform(chunk, encoding, callback) {
        const chString = chunk.toString().trim();
        const chReverse = chString.split('').reverse().join('');
        callback(null, `${chReverse}\n`);
      },
    });
    process.stdin.pipe(reverseStream).pipe(process.stdout);
  } catch (err) {
    console.error(msgError);
  }
};

await transform();