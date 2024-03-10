// FreeBook.tsx | tests
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FreeBook from '../FreeBook';

describe('FreeBook component', () => {
  test('renders free-book details correctly', () => {
    const onClickMock = jest.fn();
    
    const testData = {title: "Book 1", image: "image1.jpg"}; 

    const { getByText } = render(
      <FreeBook title={testData.title} image={testData.image} onClickFree={onClickMock}/>
    );

    const button = getByText('Read Free');
    expect(getByText(testData.title)).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
