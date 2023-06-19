const parseArgs = () => {
  const keyArgs = '--';
  const arrArgs = [];
  let checkValue = 0;

  process.argv.forEach((item, i, arr) => {
    const arrNext = arr[i + 1];
    if (checkValue === 1) {
      arrArgs.push(item);
      checkValue = 0;
    }
    if (item.startsWith(keyArgs) && arrNext) {
      arrArgs.push(item.slice(2));
      checkValue = 1;
    }
  });
  const arrResult = [];
  for (let i = 0; i < arrArgs.length; i += 2) {
    arrResult.push(`${arrArgs[i]} is ${arrArgs[i + 1]}`);
  }
  const result = arrResult.join(', ');
  console.log(result);
};

parseArgs();
