test('test obj', () => {
  const data = { name: 'Cris' };
  expect(data).toEqual({ name: 'Cris' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
});

test('string', () => {
  expect('Camilo').toMatch(/ilo/);
});
