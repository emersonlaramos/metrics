import  { validateCPForCNPJ }  from "./cpfAndCnpj";

describe("Inner HTML Mock for tests", () => {

  test("valid cpf input value", () => {
    const isCPFValid = validateCPForCNPJ("012.345.678-90");

    expect(isCPFValid).toBe(true);
  });

  test("valid cnpj input value", () => {
    const isCPFValid = validateCPForCNPJ("02.652.446/0001-26");

    expect(isCPFValid).toBe(true);
  });

  test("invalid input value", () => {
    const isCPFValid = validateCPForCNPJ("012.345-90");

    expect(isCPFValid).toBe(false);
  });
});
