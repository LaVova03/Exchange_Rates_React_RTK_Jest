import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUsBody from '../../components/AboutUsBody/AboutUsBody';
import '@testing-library/jest-dom';

test('render AboutUs inform', () => {
    render(<AboutUsBody />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const listItem = screen.getAllByRole('listitem');
    expect(listItem.length).toBeGreaterThan(4);

    const text = screen.getByText(/Welcome to 'Finance Exchanges'/i);
    expect(text).toBeInTheDocument();
})