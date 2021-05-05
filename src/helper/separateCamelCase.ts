export const separateCamelCase = (word: string): string => {
  let newWord: string = word
    .trim()
    .split(/(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join(" ")
  return newWord.charAt(0).toUpperCase() + newWord.slice(1)
}
