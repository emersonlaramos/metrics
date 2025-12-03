import  { validatePhone }  from "./phone";

describe("Inner HTML Mock for tests", () => {

  test("valid phone input value", () => {
    const isPhoneValid = validatePhone("(11) 91111-1111");

    expect(isPhoneValid).toBe(true);
  });

  test("invalid phone input value", () => {
    const isPhoneValid = validatePhone("(11) 911-1111");

    expect(isPhoneValid).toBe(false);
  });
});
