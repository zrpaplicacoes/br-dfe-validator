import aamm from './aamm';
import cnpj from './cnpj';
import code from './code';
import dv from './dv';
import model, { getModelName, isCommonFormat, isCfe, isSupportedModel } from './model';
import number from './number';
import series from './series';
import _type from './type';
import uf, { getUFCode, getUFName } from './uf';

const get = { model: getModelName, uf: getUFName, ufCode: getUFCode };
const check = { isCommonFormat, isCfe, isSupportedModel };
export default {
  aamm, cnpj, code, dv, get, check, model, number, series, type: _type, uf,
};
