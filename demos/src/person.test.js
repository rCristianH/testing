const Person = require('./person');

describe('Test class person', () => {
  let person;
  // Arrange
  beforeEach(() => {
    person = new Person('Carlos', 40, 1.7);
  });
  test('should return imc down', () => {
    // Arrange
    person.weight = 45;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  });
  test('should return imc high', () => {
    person.weight = 60;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
