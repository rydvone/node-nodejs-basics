import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const workerService = (num) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(`${_dirname}/worker.js`, { workerData: num });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code != 0) {
        reject(new Error('Worker error'));
      }
    });
  });
};

const performCalculations = async () => {
  const cpuCount = cpus().length;
  let startNum = 10;
  const arrWorker = [];
  for (let i = 0; i < cpuCount; i += 1) {
    const workerResult = workerService(startNum + i);
    arrWorker.push(workerResult);
  }

  const resPromise = await Promise.allSettled(arrWorker);
  const result = resPromise.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: status === 'fulfilled' ? value : null,
  }));

  console.log(result);
};

await performCalculations();
