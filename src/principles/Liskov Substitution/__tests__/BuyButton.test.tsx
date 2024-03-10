// BuyButton.tsx | tests
import { render, fireEvent } from '@testing-library/react';
import BuyButton from '../BuyButton';

describe('BuyButton component', () => {
  test('renders buy-button details correctly', () => {
    const onClickMock = jest.fn();

    const testData = { title: "Buy" }; 

    const { getByTitle } = render(
      <BuyButton title={testData.title} onClick={onClickMock}/>
    );

    const button = getByTitle(testData.title);
    expect(getByTitle(testData.title)).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
