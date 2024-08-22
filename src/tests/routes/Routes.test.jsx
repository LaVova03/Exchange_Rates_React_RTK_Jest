// src/tests/Routers.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Routers from '../../routes';

jest.mock('axios');

const renderWithRouter = (initialRoute = '/') => {
    window.history.pushState({}, 'Test Page', initialRoute);
    render(<Routers />);
};

describe('Routers', () => {
    it('renders App component on "/" route', () => {
        renderWithRouter('/');

        expect(screen.getByText(/Обміняти валюту/i)).toBeInTheDocument();
    });

    it('renders App component on "/contacts" route', async () => {

        const mockData = [
            { "№": "1", "ім'я": "Product 1", phone: 'phone1' },
            { "№": "2", "ім'я": "Product 2", phone: 'phone2' },
        ];

        axios.get.mockResolvedValueOnce({ status: 200, data: mockData });

        renderWithRouter('/contacts');

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

        const lists = await screen.findAllByRole('list');
        expect(lists.length).toBeGreaterThan(0);

        const listItems = await screen.findAllByRole('listitem');
        expect(listItems.length).toBeGreaterThan(1);
    });

    it('renders 404 page for invalid route', () => {
        renderWithRouter('/invalid-route');

        expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    });
});
