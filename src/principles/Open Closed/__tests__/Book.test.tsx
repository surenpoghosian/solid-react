// Book.tsx | tests
import React from 'react';
import { render } from '@testing-library/react';
import Book from '../Book';

describe('Book component', () => {
  test('renders book details correctly', () => {
    const testData = {title: "Book 1", image: "image1.jpg"}; 

    const { getByText, getByRole } = render(
      <Book title={testData.title} image={testData.image}></Book>
    );

    expect(getByText(testData.title)).toBeInTheDocument();

    const imageElement = getByRole('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', testData.image);
  });
});