export default (type, model = '55') => {
  if (typeof type !== 'string' && typeof type !== 'number') {
    return false;
  }

  const stringType = String(type);

  if (stringType.length !== 1) {
    return false;
  } else if (model === '55' && (Number(stringType) < 0 || Number(stringType) > 7)) {
    return false;
  }

  return true;
};
