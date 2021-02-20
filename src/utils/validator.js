export const validateIncorrectValue = (reg) => (value) => {
  if (!value) return "Field is required";
  if (!value.match(reg)) return "Field has an incorrect value";
  return undefined;
};

export const required = (value) => {
  if (!value) return "Field is required";
  return undefined;
};

export const mustBeANumber = (value) => {
  if (isNaN(value)) return "Field must be a number";
  return undefined;
};
