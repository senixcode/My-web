export const useCache = () => {
  const set = (key, value) => {
    localStorage.setItem(key, value);
  };
  const get = (key) => {
    return localStorage.getItem(key);
  };
  return {
    set,
    get,
  };
};
