// PremiumBook.tsx | tests
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PremiumBook from '../PremiumBook';

describe('PremiumBook component', () => {
  test('renders premium-book details correctly', () => {
    const onClickMock = jest.fn();

    const testData = {title: "Book 1", image: "image1.jpg"}; 

    const { getByText, getByTestId } = render(
      <PremiumBook title={testData.title} image={testData.image} onClickPremium={onClickMock}/>
    );

    const button = getByTestId('premium-button');
    expect(getByText(testData.title)).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
