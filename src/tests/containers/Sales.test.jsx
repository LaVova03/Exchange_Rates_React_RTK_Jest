import React from 'react';
import { render, screen } from '@testing-library/react';
import Sales from '../../containers/Sales/Sales';
import axios from "axios";
import '@testing-library/jest-dom';

jest.mock('axios');

test('SalesBody render', async () => {

    const mockData = [
        {
            date: "date1",
            id: "id1",
            order: "order1",
            photo: 'photo1',
            serialNumber: 'serialNumber1',
            title: 'title1'
        },
        {
            date: "date2",
            id: "id2",
            order: "order2",
            photo: 'photo2',
            serialNumber: 'serialNumber2',
            title: 'title2'
        },
    ];

    axios.get.mockResolvedValueOnce({ status: 200, data: mockData });

    render(
        <Sales />
    );

    const load = await screen.findByText('Loading...');
    expect(load).toBeInTheDocument();

    const lists = await screen.findAllByRole('list');
    expect(lists.length).toBeGreaterThan(0);

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems.length).toBeGreaterThan(5);
});
