import validateDV from './dv';

describe('DV', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateDV(null)).toBe(false);
      expect(validateDV({})).toBe(false);
      expect(validateDV([])).toBe(false);
      expect(validateDV(() => 0)).toBe(false);
      expect(validateDV(undefined)).toBe(false);
      expect(validateDV(42100484684182000157550010000000020108042108)).toBe(false);
      expect(validateDV(0)).toBe(false);
    });

    it('should validate invalid access key', () => {
      expect(validateDV('42100484684182900157550010000000020108042102')).toBe(false);
    });

    it('should validate invalid access key nfce 1', () => {
      expect(validateDV('35230533338475010141651010000134291251762806')).toBe(false);
    });

    it('should validate invalid access key nfce 2', () => {
      expect(validateDV('33230633448250002534650210000397601269892510')).toBe(false);
    });

    it('should validate invalid access key nfe 1', () => {
      expect(validateDV('23230515436940001581550010064785181124628663')).toBe(false);
    });

    it('should validate invalid access key nfe 2', () => {
      expect(validateDV('31230507256512000892550120005042861648756111')).toBe(false);
    });

    it('should validate invalid access key cfe/sat', () => {
      expect(validateDV('35230710558041000556590013069980188869528732')).toBe(false);
    });
  });

  describe('Valid', () => {
    it('should validate with punctuation', () => {
      expect(validateDV('42-10/04-84.684.182/0001-57-55-001-000.000.002-010.804.210-8'))
        .toBe(true);
    });

    it('should validate without punctuation', () => {
      expect(validateDV('42100484684182000157550010000000020108042108')).toBe(true);
    });

    it.each(
      [
        '29230550063647000130550810003944781832997996',
        '32230761585865209387550070000152761202307085',
        '21230461585865264051550070000123961202304284',
        '15230461585865234063550070000069751202304271',
      ]
    )('should validate nfe', (nfe) => {
      expect(validateDV(nfe)).toBe(true);
    });

    it.each(
      [
        '51230706626253128620651030000243921607854699',
        '35230533338475000141651010000134291251762806',
        '33230633438250002534650210000397601269892510',
        '15230630870888001660650010000968941065616311',
        '25230606626253139907651020000304471872638074',
        '26230606626253098887651020000440011865746795'
      ]
    )('should validate nfce', (nfce) => {
      expect(validateDV(nfce)).toBe(true);
    });

    it.each(
      [
        '35230710558061000556590013069980188869528732',
        '23230643975156000109592301956630349687111240',
        '35230707685223002637590006909071463418844098',
        '35230679430682034612590007839070709260739585',
        '35230554375647003223590010159011081710836338'
      ]
    )('should validate cfe/sat', (cfe) => {
      expect(validateDV(cfe)).toBe(true);
    });
  });
});
