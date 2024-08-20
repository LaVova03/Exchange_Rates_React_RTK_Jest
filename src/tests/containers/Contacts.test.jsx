import React from 'react';
import { render, screen } from '@testing-library/react';
import Contacts from '../../containers/Contacts/Contacts';
import '@testing-library/jest-dom';

test('Contacts render', async () => {
    render(<Contacts />);
    const load = await screen.findByText('Loading...');
    expect(load).toBeInTheDocument();
})