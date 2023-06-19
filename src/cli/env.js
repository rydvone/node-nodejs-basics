const parseEnv = () => {
  const keyRss = 'RSS_';
  const arrRssVariable = [];
  Object.entries(process.env).forEach(([key, value]) => {
    if (key.startsWith(keyRss)) {
      arrRssVariable.push(`${key}=${value}`);
    }
  });
  const result = arrRssVariable.join('; ');
  console.log(result);
};

parseEnv();
