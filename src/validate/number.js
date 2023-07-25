import validate from ".";

export default (number, model = '55') => {
  if (typeof number !== 'string' && typeof number !== 'number') {
    return false;
  }

  const stringNumber = String(number);

  if (validate.check.isNfeNfce(model) && stringNumber.length !== 9) {
    return false;
  } else if (validate.check.isCfe(model) && stringNumber.length !== 6) {
    return false;
  }

  return true;
};
