import { fork } from 'node:child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { argv } from 'node:process';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const path = `${_dirname}/files/script.js`;
const msgError = 'CP operation failed';

const spawnChildProcess = async (args) => {
  const msg = args ? args : [...process.argv.slice(2)];
  try {
    const childProcess = fork(path, [...msg]);
    childProcess.on('close', (code) =>
      console.log(`Child process exited. Code: ${code}`)
    );
  } catch (err) {
    console.error(msgError);
  }
};

spawnChildProcess();
