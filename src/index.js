import validate from './validate';

export default (accessKey, options = {}) => {
  if (typeof accessKey !== 'string') {
    return false;
  }

  const unmaskedAccessKey = accessKey.replace(/\D/g, '');

  if (unmaskedAccessKey.length !== 44) {
    return false;
  }

  // common to current processed DFE's
  // NFC-e, NF-e and CT-e
  const uf = unmaskedAccessKey.slice(0, 2);
  const aamm = unmaskedAccessKey.slice(2, 6);
  const cnpj = unmaskedAccessKey.slice(6, 20);
  const model = unmaskedAccessKey.slice(20, 22);

  if (!validate.check.isSupportedModel(model)) {
    console.error(`Unsupported DFE, must be NFCE/NFE/CFE. Received model: ${model}`);
    return false;
  }

  let series, number, dv, type, code, numericRandom;

  if (validate.check.isNfeNfce(model)) {
    series = unmaskedAccessKey.slice(22, 25);
    number = unmaskedAccessKey.slice(25, 34);
    type = unmaskedAccessKey.slice(34, 35);
    code = unmaskedAccessKey.slice(35, 43);
  } else {
    series = unmaskedAccessKey.slice(22, 31);
    number = unmaskedAccessKey.slice(31, 37);
    numericRandom = unmaskedAccessKey.slice(37, 43);
  }

  dv = unmaskedAccessKey.slice(43, 44);

  const validations = {
    uf: {
      isValid: validate.uf(uf),
      translation: validate.get.uf(uf),
      code: validate.get.ufCode(uf),
      value: uf,
    },
    aamm: {
      isValid: validate.aamm(aamm),
      value: aamm,
    },
    cnpj: {
      isValid: validate.cnpj(cnpj),
      value: cnpj,
    },
    model: {
      isValid: validate.model(model),
      translation: validate.get.model(model),
      value: model,
    },
    series: {
      isValid: validate.series(series, model),
      value: series,
    },
    number: {
      isValid: validate.number(number, model),
      value: number,
    },
    type: {
      isValid: validate.check.isNfeNfce(model) ? validate.type(type, model) : true,
      value: type,
    },
    code: {
      isValid: validate.check.isNfeNfce(model) ? validate.code(code) : true,
      value: code,
    },
    numericRandom: {
      isValid: validate.check.isNfeNfce(model) ? true : validate.number(numericRandom, model),
      value: numericRandom,
    },
    dv: {
      isValid: validate.dv(accessKey),
      value: dv,
    },
  };

  if (options.describe === true) {
    return validations;
  }

  return Object.values(validations).every(field => field.isValid);
};

export { validate };
