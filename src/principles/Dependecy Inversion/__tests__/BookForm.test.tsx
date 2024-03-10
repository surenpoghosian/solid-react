import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookForm from '../BookForm';

describe('BookForm', () => {
  it('renders form inputs correctly', () => {
    const { getByTestId } = render(<BookForm onSubmit={() => {}} />);
    
    expect(getByTestId('title-input')).toBeInTheDocument();
    expect(getByTestId('author-input')).toBeInTheDocument();
    expect(getByTestId('bookType-input')).toBeInTheDocument();
  });

  it('calls onSubmit prop when form is submitted', () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(<BookForm onSubmit={handleSubmit} />);
    
    fireEvent.submit(getByTestId('book-form'));

    expect(handleSubmit).toHaveBeenCalled();
  });
});
