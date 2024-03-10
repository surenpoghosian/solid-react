import React from 'react';
import { render } from '@testing-library/react';

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
