/**
 * This function creates a Phone mask: (XX) XXXXX-XXXX, in the field that calls it.
 */

export const createPhoneMask = (e: any) => {
  const value: any = e.target.value.replace(/\D/g, "");
  let formattedValue = "";

  if (value.length > 0) {
    formattedValue += "(" + value.substring(0, 2);
  }
  if (value.length > 2) {
    formattedValue += ") " + value.substring(2, 7);
  }
  if (value.length > 7) {
    formattedValue += "-" + value.substring(7, 11);
  }

  return formattedValue;
};
