import validateModel, { modelTable } from './model';
import utils from './utils';

describe('Model', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateModel(null)).toBe(false);
      expect(validateModel({})).toBe(false);
      expect(validateModel([])).toBe(false);
      expect(validateModel(() => 0)).toBe(false);
      expect(validateModel(undefined)).toBe(false);
    });

    it('should validate length', () => {
      expect(validateModel(utils.randomWithDigitRange(1))).toBe(false);
      expect(validateModel(utils.randomWithDigitRange(3, 5))).toBe(false);
    });
  });

  describe('Random checks', () => {
    it('should validate 2 digit model', () => {
      const randomModel = utils.randomWithDigitRange(2);
      const models = Object.keys(modelTable);

      expect(validateModel(randomModel)).toBe(models.includes(String(randomModel)));
      expect(validateModel(String(randomModel))).toBe(models.includes(String(randomModel)));
    });
  });
});
