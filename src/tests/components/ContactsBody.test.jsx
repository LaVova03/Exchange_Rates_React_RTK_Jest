import { render, screen } from "@testing-library/react";
import ContactsBody from "../../components/ContactsBody/ContactsBody";
import React from "react";
import axios from "axios";
import '@testing-library/jest-dom';

jest.mock('axios'); // Мокірування axios

describe('main page and request', () => {
    it('renders and fetches data', async () => {
        const mockData = [
            { id: "1", name: "Product 1" },
            { id: "2", name: "Product 2" },
        ];

        // Мокірування axios.get для повернення mockData
        axios.get.mockResolvedValueOnce({ status: 200, data: mockData });

        render(<ContactsBody />);

        // Очікування та перевірка, що списки присутні на сторінці
        const lists = await screen.findAllByRole('list');
        expect(lists.length).toBeGreaterThan(0);

        // Очікування та перевірка, що елементи списків присутні на сторінці
        const listItems = await screen.findAllByRole('listitem');
        expect(listItems.length).toBeGreaterThan(0);
    });
});
