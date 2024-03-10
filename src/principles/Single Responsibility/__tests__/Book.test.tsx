import React from 'react';
import { render } from '@testing-library/react';
import { Book } from '../Book';
  
describe('Book component', () => {
  test('renders book details correctly', () => {
    const testData = {id: "1", name: "Book 1", imageUrl: "image1.jpg", createdAt: "2024-03-09"};
    const { getByText, getByRole } = render(
        <Book id={testData.id} name={testData.name} imageUrl={testData.imageUrl} createdAt={testData.createdAt}/>
    );

    expect(getByText(testData.name)).toBeInTheDocument();
    expect(getByText(testData.createdAt)).toBeInTheDocument();

    const imageElement = getByRole('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', testData.imageUrl);
  });
});