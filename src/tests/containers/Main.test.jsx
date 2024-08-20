import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Main from '../../containers/Main/Main';
import '@testing-library/jest-dom';

describe('App Component', () => {
  test('renders input, button, and calculation result', () => {
    render(<Main />);

    const inputs = screen.getAllByPlaceholderText('value');
    expect(inputs.length).toBeGreaterThan(0);

    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
    expect(screen.getByText(/0 \* 2 = 0/)).toBeInTheDocument();
  });

  test('input value changes and calculation updates', () => {
    render(<Main />);

    const inputs = screen.getAllByPlaceholderText('value');
    const firstInput = inputs[0];
    const resetButton = screen.getByRole('button', { name: /reset/i });

    fireEvent.change(firstInput, { target: { value: '5' } });
    expect(firstInput.value).toBe('5');
    expect(screen.getByText(/5 \* 2 = 10/)).toBeInTheDocument();

    fireEvent.click(resetButton);
    expect(firstInput.value).toBe('');
    expect(screen.getByText(/0 \* 2 = 0/)).toBeInTheDocument();
  });
});
