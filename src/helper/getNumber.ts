export const getNumber = (word: string): number => {
  const list: Array<string> = word.match(/\d/g);
  const result: number = parseInt(list.join(""));
  return result;
};
