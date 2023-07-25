import validateCNPJ from './cnpj';

describe('CNPJ', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateCNPJ(null)).toBe(false);
      expect(validateCNPJ({})).toBe(false);
      expect(validateCNPJ([])).toBe(false);
      expect(validateCNPJ(() => 0)).toBe(false);
      expect(validateCNPJ(undefined)).toBe(false);
    });

    it('should validate string', () => {
      expect(validateCNPJ('')).toBe(false);
      expect(validateCNPJ('false')).toBe(false);
      expect(validateCNPJ('00000000000000')).toBe(false);
      expect(validateCNPJ('11111111111111')).toBe(false);
    });

    it('should validate number', () => {
      expect(validateCNPJ('')).toBe(false);
      expect(validateCNPJ('false')).toBe(false);
      expect(validateCNPJ('00000000000000')).toBe(false);
      expect(validateCNPJ('11111111111111')).toBe(false);
    });

    it('should validate with punctuation', () => {
      expect(validateCNPJ('11.779.287/0001-10')).toBe(false);
      expect(validateCNPJ('32.516.718/0001-20')).toBe(false);
      expect(validateCNPJ('71.701.068/0001-40')).toBe(false);
      expect(validateCNPJ('81.101.271/0001-30')).toBe(false);
      expect(validateCNPJ('99.293.612/0001-80')).toBe(false);
    });

    it('should validate without punctuation', () => {
      expect(validateCNPJ('11779287000110')).toBe(false);
      expect(validateCNPJ('32516718000120')).toBe(false);
      expect(validateCNPJ('71701068000140')).toBe(false);
      expect(validateCNPJ('81101271000130')).toBe(false);
      expect(validateCNPJ('99293612000180')).toBe(false);

      expect(validateCNPJ(11779287000110)).toBe(false);
      expect(validateCNPJ(32516718000120)).toBe(false);
      expect(validateCNPJ(71701068000140)).toBe(false);
      expect(validateCNPJ(81101271000130)).toBe(false);
      expect(validateCNPJ(99293612000180)).toBe(false);
    });
  });

  describe('Valid', () => {
    it('should validate with punctuation', () => {
      expect(validateCNPJ('11.779.287/0001-16')).toBe(true);
      expect(validateCNPJ('32.516.718/0001-21')).toBe(true);
      expect(validateCNPJ('71.701.068/0001-46')).toBe(true);
      expect(validateCNPJ('81.101.271/0001-35')).toBe(true);
      expect(validateCNPJ('99.293.612/0001-87')).toBe(true);
    });

    it('should validate without punctuation', () => {
      expect(validateCNPJ('11779287000116')).toBe(true);
      expect(validateCNPJ('32516718000121')).toBe(true);
      expect(validateCNPJ('71701068000146')).toBe(true);
      expect(validateCNPJ('81101271000135')).toBe(true);
      expect(validateCNPJ('99293612000187')).toBe(true);

      expect(validateCNPJ(11779287000116)).toBe(true);
      expect(validateCNPJ(32516718000121)).toBe(true);
      expect(validateCNPJ(71701068000146)).toBe(true);
      expect(validateCNPJ(81101271000135)).toBe(true);
      expect(validateCNPJ(99293612000187)).toBe(true);
    });
  });
});
