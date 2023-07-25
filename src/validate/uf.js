export const ufTable = {
  '11': 'Rondônia',
  '12': 'Acre',
  '13': 'Amazonas',
  '14': 'Roraima',
  '15': 'Pará',
  '16': 'Amapá',
  '17': 'Tocantins',
  '21': 'Maranhão',
  '22': 'Piauí',
  '23': 'Ceará',
  '24': 'Rio Grande do Norte',
  '25': 'Paraíba',
  '26': 'Pernambuco',
  '27': 'Alagoas',
  '28': 'Sergipe',
  '29': 'Bahia',
  '31': 'Minas Gerais',
  '32': 'Espírito Santo',
  '33': 'Rio de Janeiro',
  '35': 'São Paulo',
  '41': 'Paraná',
  '42': 'Santa Catarina',
  '43': 'Rio Grande do Sul',
  '50': 'Mato Grosso do Sul',
  '51': 'Mato Grosso',
  '52': 'Goiás',
  '53': 'Distrito Federal',
};

const UFAbbreviationTable = {
  'Acre': 'AC',
  'Alagoas': 'AL',
  'Amapá': 'AP',
  'Amazonas': 'AM',
  'Bahia': 'BA',
  'Ceará': 'CE',
  'Distrito Federal': 'DF',
  'Espírito Santo': 'ES',
  'Goiás': 'GO',
  'Maranhão': 'MA',
  'Mato Grosso': 'MT',
  'Mato Grosso do Sul': 'MS',
  'Minas Gerais': 'MG',
  'Pará': 'PA',
  'Paraíba': 'PB',
  'Paraná': 'PR',
  'Pernambuco': 'PE',
  'Piauí': 'PI',
  'Rio de Janeiro': 'RJ',
  'Rio Grande do Norte': 'RN',
  'Rio Grande do Sul': 'RS',
  'Rondônia': 'RO',
  'Roraima': 'RR',
  'Santa Catarina': 'SC',
  'São Paulo': 'SP',
  'Sergipe': 'SE',
  'Tocantins': 'TO',
};

export const getUFName = (uf) => {
  if (typeof uf !== 'string' && typeof uf !== 'number') {
    return undefined;
  }

  const stringUf = String(uf).replace(/\D/g, '');

  return ufTable[stringUf];
};

export const getUFCode = (uf) => {
  return UFAbbreviationTable[getUFName(uf)];
}

export default (uf) => {
  if (typeof uf !== 'string' && typeof uf !== 'number') {
    return false;
  }

  const stringUf = String(uf);

  if (stringUf.length !== 2) {
    return false;
  }

  return Object.keys(ufTable).includes(stringUf);
};
