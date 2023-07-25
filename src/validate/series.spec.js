import validateSeries from './series';
import utils from './utils';

describe('Series', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateSeries(null)).toBe(false);
      expect(validateSeries({})).toBe(false);
      expect(validateSeries([])).toBe(false);
      expect(validateSeries(() => 0)).toBe(false);
      expect(validateSeries(undefined)).toBe(false);
    });

    it('should validate length nfce', () => {
      expect(validateSeries(utils.randomWithDigitRange(1, 2), '65')).toBe(false);
      expect(validateSeries(utils.randomWithDigitRange(4, 20), '65')).toBe(false);
    });

    it('should validate length nfe', () => {
      expect(validateSeries(utils.randomWithDigitRange(1, 2), '55')).toBe(false);
      expect(validateSeries(utils.randomWithDigitRange(4, 20), '55')).toBe(false);
    });

    it('should validate length cfe', () => {
      expect(validateSeries(utils.randomWithDigitRange(1, 8), '59')).toBe(false);
      expect(validateSeries(utils.randomWithDigitRange(10, 20), '59')).toBe(false);
    });
  });

  describe('Valid', () => {
    it('should validate length nfe', () => {
      expect(validateSeries(utils.randomWithDigitRange(3), '55')).toBe(true);
    });

    it('should validate length nfce', () => {
      expect(validateSeries(utils.randomWithDigitRange(3), '65')).toBe(true);
    });

    it('should validate length cfe', () => {
      expect(validateSeries(utils.randomWithDigitRange(9), '59')).toBe(true);
    });
  });
});
