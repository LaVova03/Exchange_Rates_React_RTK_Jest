import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BodyMain from '../../components/BodyMain/BodyMain';
import '@testing-library/jest-dom';
import { mockExchangeRate } from '../fetches/Fetch';

jest.mock('../fetches/Fetch', () => ({
    __esModule: true,
    default: () => ({
        exchangeRate: mockExchangeRate,
        loading: false,
        error: null
    })
}));

describe('BodyMain Component', () => {

    test('renders the BodyMain component', () => {
        render(<BodyMain />);

        expect(screen.getAllByText(/EUR/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/USD/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/UAH/i).length).toBeGreaterThan(0);

        expect(screen.getAllByPlaceholderText('0').length).toBe(2);
        expect(screen.getByText('Обміняти валюту')).toBeInTheDocument();
    });

    test('ensures currencies are not the same', async () => {
        render(<BodyMain />);

        const [firstInputEURButton] = screen.getAllByText(/EUR/i);
        const [firstInputUSDButton] = screen.getAllByText(/USD/i);

        fireEvent.click(firstInputEURButton);
        fireEvent.click(firstInputUSDButton);

        expect(screen.queryByText('The selected currencies cannot be the same.')).not.toBeInTheDocument();
    });

    test('корректный расчет конвертации', async () => {
        render(<BodyMain />);

        // Найдите элементы выбора валют
        const [selectCurrency1] = screen.getAllByText(/USD/i);
        const [selectCurrency2] = screen.getAllByText(/UAH/i);

        // Установите валюты для полей
        fireEvent.click(selectCurrency1); // Выберите USD
        fireEvent.click(selectCurrency2); // Выберите UAH

        const input1 = screen.getAllByPlaceholderText('0')[0];
        const input2 = screen.getAllByPlaceholderText('0')[1];

        fireEvent.change(input1, { target: { value: '100' } });

        // Ожидание обновления первого поля ввода
        await waitFor(() => {
            expect(input1.value).toBe('100');
        });

        // Ожидание обновления второго поля ввода и проверка плейсхолдера
        await waitFor(async () => {
            const updatedInput2 = await screen.findByPlaceholderText('0');
            expect(updatedInput2.value).toBe('100'); // Проверка значения после конвертации
        });

        // Протестируйте обратную конвертацию
        fireEvent.change(input2, { target: { value: '2700' } });

        // Ожидание обновления значения первого поля
        await waitFor(() => {
            expect(input2.value).toBe('2700');
        });

        // Ожидание обновления значения второго поля
        await waitFor(async () => {
            const updatedInput1 = await screen.findByPlaceholderText('0');
            expect(updatedInput1.value).toBe('2700');
        });
    });
});
