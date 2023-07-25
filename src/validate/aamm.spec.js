import validateAAMM from './aamm';
import utils from './utils';

describe('AAMM', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateAAMM(null)).toBe(false);
      expect(validateAAMM(null)).toBe(false);
      expect(validateAAMM({})).toBe(false);
      expect(validateAAMM([])).toBe(false);
      expect(validateAAMM(() => 0)).toBe(false);
      expect(validateAAMM(undefined)).toBe(false);
    });

    it('should validate invalid string', () => {
      expect(validateAAMM('')).toBe(false);
      expect(validateAAMM('12122')).toBe(false);
      expect(validateAAMM('0000')).toBe(false);
      expect(validateAAMM('000')).toBe(false);
      expect(validateAAMM('00')).toBe(false);
      expect(validateAAMM('0')).toBe(false);
    });

    it('should validate month', () => {
      expect(validateAAMM('1200')).toBe(false);
      expect(validateAAMM('1213')).toBe(false);
      expect(validateAAMM('1214')).toBe(false);
      expect(validateAAMM('1215')).toBe(false);
    });

    it('should validate month', () => {
      expect(validateAAMM('1200')).toBe(false);
      expect(validateAAMM('1213')).toBe(false);
      expect(validateAAMM('1214')).toBe(false);
      expect(validateAAMM('1215')).toBe(false);
    });
  });

  describe('Valid', () => {
    it('should validate month', () => {
      const year = String(utils.randomWithDigitRange(1, 2)).padStart(2, '0');

      for (let i = 1; i <= 12; i++) {
        expect(validateAAMM(`${year}${String(i).padStart(2, '0')}`)).toBe(true);
      }
    });
  });
});
