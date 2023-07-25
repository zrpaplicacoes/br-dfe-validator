import validate from ".";

export default (series, model = '55') => {
  if (typeof series !== 'string' && typeof series !== 'number') {
    return false;
  }

  const stringSeries = String(series);

  if (validate.check.isNfeNfce(model) && stringSeries.length !== 3) {
    return false;
  } else if (validate.check.isCfe(model) && stringSeries.length !== 9) {
    return false;
  }

  return true;
};
