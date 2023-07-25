import validateType from './type';
import utils from './utils';

describe('Type', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateType(null)).toBe(false);
      expect(validateType({})).toBe(false);
      expect(validateType([])).toBe(false);
      expect(validateType(() => 0)).toBe(false);
      expect(validateType(undefined)).toBe(false);
    });

    it('should validate length', () => {
      expect(validateType(utils.randomWithDigitRange(2, 10))).toBe(false);
    });
  });

  describe('Random check', () => {
    it('should validate', () => {
      const rand = utils.randomWithDigitRange(1);
      expect(validateType(rand)).toBe(rand >= 1 && rand <= 5);
    });
  });

  describe('Valid', () => {
    it('should ignore type in nfce', () => {
      expect(validateType(9, '65')).toBe(true);
    });

    it('should validate type between 1 and 5', () => {
      expect(validateType(1)).toBe(true);
      expect(validateType(2)).toBe(true);
      expect(validateType(3)).toBe(true);
      expect(validateType(4)).toBe(true);
      expect(validateType(5)).toBe(true);
    });
  });
});
