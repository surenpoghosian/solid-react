import React from 'react';
import { render } from '@testing-library/react';
import { Book } from '../Book';

// Mocking the useGetBooks.hook
jest.mock('../hooks/useGetBooks.hook', () => ({
    __esModule: true,
    default: jest.fn(() => ({ books: [{ id: '1', name: 'Book 1', imageUrl: 'image1.jpg', createdAt: '2024-03-09' }], loading: false, error: null })),
}));
  
describe('BookList component', () => {
    test('renders book list correctly', () => {

      const BookList = require('../BookList.component').default;
      const { getByText } = render(<BookList />);
      
      expect(getByText('Book 1')).toBeInTheDocument();
    });
  });

describe('Book component', () => {
  test('renders book details correctly', () => {
    const { getByText } = render(
      <Book id="1" name="Book 1" imageUrl="image1.jpg" createdAt="2024-03-09" />
    );

    expect(getByText('Book 1')).toBeInTheDocument();
    expect(getByText('2024-03-09')).toBeInTheDocument();
  });
});