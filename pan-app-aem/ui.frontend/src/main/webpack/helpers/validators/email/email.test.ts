import { validateEmail } from "./email";

describe("Inner HTML Mock for tests", () => {
  test("invalid email input value", async () => {
    const isValid = validateEmail("teste@email");

    expect(isValid).toBe(false);
  });

  test("valid email input value", async () => {
    const isValid = validateEmail("teste@email.com");

    expect(isValid).toBe(true);
  });
});
