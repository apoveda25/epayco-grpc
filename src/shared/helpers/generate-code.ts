export const ramdonCode = (length: number) => {
  const code = [];

  for (let index = 0; index < length; index++) {
    code.push(Math.floor(Math.random() * 10));
  }

  return code.join('');
};
