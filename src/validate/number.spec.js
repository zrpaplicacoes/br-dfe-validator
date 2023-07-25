import validateNumber from './number';
import utils from './utils';

describe('Number', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateNumber(null)).toBe(false);
      expect(validateNumber({})).toBe(false);
      expect(validateNumber([])).toBe(false);
      expect(validateNumber(() => 0)).toBe(false);
      expect(validateNumber(undefined)).toBe(false);
    });

    it('should validate length nfce', () => {
      expect(validateNumber(utils.randomWithDigitRange(2, 8), '65')).toBe(false);
      expect(validateNumber(utils.randomWithDigitRange(10, 20), '65')).toBe(false);
    });

    it('should validate length nfe', () => {
      expect(validateNumber(utils.randomWithDigitRange(2, 8), '55')).toBe(false);
      expect(validateNumber(utils.randomWithDigitRange(10, 20), '55')).toBe(false);
    });

    it('should validate length cfe', () => {
      expect(validateNumber(utils.randomWithDigitRange(1, 5), '59')).toBe(false);
      expect(validateNumber(utils.randomWithDigitRange(7, 20), '59')).toBe(false);
    });
  });

  describe('Valid', () => {
    it('should validate length nfe', () => {
      expect(validateNumber(utils.randomWithDigitRange(9), '55')).toBe(true);
    });

    it('should validate length nfce', () => {
      expect(validateNumber(utils.randomWithDigitRange(9), '65')).toBe(true);
    });

    it('should validate length cfe', () => {
      expect(validateNumber(utils.randomWithDigitRange(6), '59')).toBe(true);
    });
  });
});
