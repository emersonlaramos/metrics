/**
 * This function creates a CPF or CNPJ mask in the field that calls it.
 */

export const createCpfOrCnpjMask = (e: any) => {
  const value: any = e.target.value.replace(/\D/g, "");
  let formattedValue = "";

  if (e.target.value.length <= 14) {
    if (value.length > 0) {
      formattedValue += value.substring(0, 3);
    }
    if (value.length > 3) {
      formattedValue += "." + value.substring(3, 6);
    }
    if (value.length > 6) {
      formattedValue += "." + value.substring(6, 9);
    }
    if (value.length > 9) {
      formattedValue += "-" + value.substring(9, 11);
    }
  }
  if (e.target.value.length > 14) {
    if (value.length > 0) {
      formattedValue += value.substring(0, 2);
    }
    if (value.length > 2) {
      formattedValue += "." + value.substring(2, 5);
    }
    if (value.length > 5) {
      formattedValue += "." + value.substring(5, 8);
    }
    if (value.length > 8) {
      formattedValue += "/" + value.substring(8, 12);
    }
    if (value.length > 12) {
      formattedValue += "-" + value.substring(12, 14);
    }
  }

  return formattedValue;
};
