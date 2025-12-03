import { validateName } from "./name";

describe("Inner HTML Mock for tests", () => {
  test("invalid name input value", async () => {
    const isValid = validateName("Teste");

    expect(isValid).toBe(false);
  });

  test("valid name input value", async () => {
    const isValid = validateName("João Souza");

    expect(isValid).toBe(true);
  });
});
