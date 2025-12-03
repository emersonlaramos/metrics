/**
 * This helpers function checks if was given a valid email and return with true or false
 * @param {string} inputEmailValue - The email that must be valided.
 */
export const validateEmail = (inputEmailValue: string): boolean => {
  const emailRegex = /\S+@\S+\.\S+/;

  if (!emailRegex.test(inputEmailValue)) {
    return false;
  }
  return true;
};
