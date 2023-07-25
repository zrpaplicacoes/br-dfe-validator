import validateCode from './code';
import utils from './utils';

describe('Code', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateCode(null)).toBe(false);
      expect(validateCode({})).toBe(false);
      expect(validateCode([])).toBe(false);
      expect(validateCode(() => 0)).toBe(false);
      expect(validateCode(undefined)).toBe(false);
    });

    it('should validate length', () => {
      expect(validateCode(utils.randomWithDigitRange(2, 7))).toBe(false);
      expect(validateCode(utils.randomWithDigitRange(9, 20))).toBe(false);
      expect(validateCode(utils.randomWithDigitRange(8), true)).toBe(false);
    });
  });

  describe('Valid', () => {
    it('should validate length', () => {
      expect(validateCode(utils.randomWithDigitRange(8))).toBe(true);
      expect(validateCode(utils.randomWithDigitRange(9), true)).toBe(true);
    });
  });
});
