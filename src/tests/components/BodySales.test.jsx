import { render, screen } from "@testing-library/react";
import BodySales from "../../components/BodySalse/BodySales";
import React from "react";
import axios from "axios";
import '@testing-library/jest-dom';

jest.mock('axios');

describe('render Body Sales', () => {
    it('renders and fetches data correctly', async () => {
        const mockData = [
            { date: 'date1', id: 'id1', order: 'order1', photo: 'photo1', serialNumber: 'serialNumber1', title: 'title1' },
            { date: 'date2', id: 'id2', order: 'order2', photo: 'photo2', serialNumber: 'serialNumber2', title: 'title2' }
        ];

        // Убедимся, что именно axios.get возвращает наши данные
        axios.get.mockResolvedValueOnce({ status: 200, data: mockData });

        render(<BodySales />);

        // Проверяем наличие текста "Loading..."
        expect(screen.getByText('Loading...')).toBeInTheDocument();

        // Ожидаем, что загрузка данных завершится
        const lists = await screen.findAllByRole('list');
        expect(lists.length).toBe(mockData.length); // Должно быть столько же списков, сколько элементов в mockData

        const listItems = await screen.findAllByRole('listitem');
        expect(listItems.length).toBeGreaterThan(0); // Проверяем наличие элементов списка
    });
});
