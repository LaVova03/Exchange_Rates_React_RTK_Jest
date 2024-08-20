import React from 'react';
import { render, screen } from '@testing-library/react';
import Sales from '../../containers/Sales/Sales';
import '@testing-library/jest-dom';

test('SalesBody render', async () => {
    render(
        <Sales />
    );

    const load = await screen.findByText('Loading...');
    expect(load).toBeInTheDocument();
});
