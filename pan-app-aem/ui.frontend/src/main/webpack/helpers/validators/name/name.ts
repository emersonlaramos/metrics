/**
 * This helpers function checks if was given a valid full name (that need to be at least 2 names) and return with true or false
 * @param {string} inputNomeValue - The name that must be valided.
 */
export const validateName = (inputNomeValue: string): boolean => {
  const regNameSpace = /[A-z][ ][A-z]/;
  const regName = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
  const primeiroNome = inputNomeValue.split(" ")[0];

  if (
    !regName.test(inputNomeValue) ||
    !regNameSpace.test(inputNomeValue) ||
    primeiroNome.length < 3
  ) {
    return false;
  }
  return true;
};
