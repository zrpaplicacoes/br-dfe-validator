import validateUF, { ufTable } from './uf';
import utils from './utils';

describe('UF', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateUF(null)).toBe(false);
      expect(validateUF({})).toBe(false);
      expect(validateUF([])).toBe(false);
      expect(validateUF(() => 0)).toBe(false);
      expect(validateUF(undefined)).toBe(false);
    });

    it('should validate invalid string', () => {
      expect(validateUF('')).toBe(false);
    });

    it('should validate 3 digit number', () => {
      expect(validateUF(utils.randomWithDigitRange(3))).toBe(false);
    });
  });

  describe('Random checks', () => {
    it('should validate 2 digit number', () => {
      const randomUF = utils.randomWithDigitRange(2);
      const ufs = Object.keys(ufTable);

      expect(validateUF(randomUF)).toBe(ufs.includes(String(randomUF)));
      expect(validateUF(String(randomUF))).toBe(ufs.includes(String(randomUF)));
    });
  });

  describe('Valid', () => {
    it('should validate ufTable', () => {
      Object.keys(ufTable).forEach(key => expect(validateUF(key)).toBe(true));
    });

    it('should have only 27 valid UFs', () => {
      let validUfs = 0;
      for (let i = 0; i < 100; i++) {
        validUfs += validateUF(i);
      }

      expect(validUfs).toBe(27);
    });
  });
});
