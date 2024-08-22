import React from "react";
import { render, screen } from '@testing-library/react';
import LeftSideMain from "../../components/LeftSideMain/LeftSideMain";
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

describe('render and function on LeftSideMain', () => {
    test('renders correctly', () => {
        render(<LeftSideMain />);

        expect(screen.getByText(/Валюта/i)).toBeInTheDocument();
        expect(screen.getByText(/Курс до грн/i)).toBeInTheDocument();
        expect(screen.getByText(/EUR/i)).toBeInTheDocument();
        expect(screen.getByText(/USD/i)).toBeInTheDocument();
        expect(screen.getByRole('table')).toBeInTheDocument();
    });
});
