export const filterValidKeys = (object: Record<string, any>) => {
  const validKeys = Object.keys(object).filter((key) => object[key]);
  return validKeys;
};
