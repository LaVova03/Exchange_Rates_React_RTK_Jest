import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BodyMain from '../../components/BodyMain/BodyMain';
import '@testing-library/jest-dom';

describe('BodyMain Component', () => {
    beforeEach(() => {
        global.alert = jest.fn();
    });

    test('renders the BodyMain component', () => {
        render(<BodyMain />);
        expect(screen.getAllByText('EUR').length).toBe(2);
        expect(screen.getAllByText('USD').length).toBe(2);
        expect(screen.getAllByText('UAH').length).toBe(2);
        expect(screen.getAllByPlaceholderText('value').length).toBe(2);
        expect(screen.getByText('Exchange')).toBeInTheDocument();
    });

    test('ensures currencies are not the same', async () => {
        render(<BodyMain />);

        const [firstInputEURButton] = screen.getAllByText('EUR');

        const [firstInputUSDButton] = screen.getAllByText('USD');

        const exchangeButton = screen.getByText('Exchange');

        fireEvent.click(firstInputEURButton);
        fireEvent.click(firstInputUSDButton);
        fireEvent.click(exchangeButton);

        expect(screen.queryByText('The selected currencies cannot be the same.')).not.toBeInTheDocument();
    });
    test('shows alert when inputs are empty', () => {
        render(<BodyMain />);

        global.alert = jest.fn();

        fireEvent.change(screen.getAllByPlaceholderText('value')[0], { target: { value: '0' } });
        fireEvent.change(screen.getAllByPlaceholderText('value')[1], { target: { value: '0' } });

        fireEvent.click(screen.getByText('Exchange'));

        expect(global.alert).toHaveBeenCalledWith('fill out inputs');
    });

    test('shows alert with multiplied values', () => {
        render(<BodyMain />);

        global.alert = jest.fn();

        fireEvent.change(screen.getAllByPlaceholderText('value')[0], { target: { value: '5' } });
        fireEvent.change(screen.getAllByPlaceholderText('value')[1], { target: { value: '2' } });

        fireEvent.click(screen.getByText('Exchange'));

        expect(global.alert).toHaveBeenCalledWith(10);
    });
});
