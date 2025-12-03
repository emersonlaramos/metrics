/**
 * This helpers receives a non-standard date and transforms it into a string in pattern DAY / MONTH / YEAR
 * @param {string} unformatedDate - The date that must be filtered.
 */
export const datePatternChangeToBR = (unformatedDate: string) => {
  const date = new Date(unformatedDate);

  const day = `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
  const mouth = `${
    date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }`;
  const year = date.getFullYear().toString().slice(-2);

  return `${day}/${mouth}/${year}`;
};
