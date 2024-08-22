import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Contacts from '../../containers/Contacts/Contacts';
import axios from "axios";
import '@testing-library/jest-dom';

jest.mock('axios');

test('Contacts render', async () => {

    const mockData = [
        { id: "1", name: "Product 1" },
        { id: "2", name: "Product 2" },
    ];

    axios.get.mockResolvedValueOnce({ status: 200, data: mockData });

    render(<Contacts />);

    await waitFor(async () => {
        const load = await screen.findByText('Loading...');
        expect(load).toBeInTheDocument();
    })

    const lists = await screen.findAllByRole('list');
    expect(lists.length).toBeGreaterThan(0);

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems.length).toBeGreaterThan(0);
})