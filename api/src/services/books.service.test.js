const BookService = require('./books.service');

// Sulpantacion de la base de datos y de el servicio
const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Mangitos',
  },
];

const mockGetAll = jest.fn();

const MonogLibStub = {
  getAll: mockGetAll,
  create: () => {},
};
jest.mock('../lib/mongo.lib', () => {
  jest.fn().mockImplementation(() => MonogLibStub);
});
// fin

describe('Test for book service', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
  });

  describe('Test for method getBooks', () => {
    test('Should return a list of books', async () => {
      const books = await service.getBooks();

      expect(books.lenght).toEqual(2);
    });
  });
});
