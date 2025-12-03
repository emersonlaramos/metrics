/**
 * This helpers function checks if was given a valid phone number (that can in a cellphone format or not) and return with true or false
 * @param {string} inputCelularValue - The phone number that must be valided.
 */
export const validatePhone = (inputCelularValue: string): boolean => {
  const regex = new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/);

  return regex.test(inputCelularValue);
};
