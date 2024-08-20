// src/tests/Routers.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Routers from '../routes'; // Путь к вашему компоненту Routers

// Функция для настройки начального состояния и навигации
const renderWithRouter = (initialRoute = '/') => {
    window.history.pushState({}, 'Test Page', initialRoute);
    render(<Routers />);
};

describe('Routers', () => {
    it('renders App component on "/" route', () => {
        renderWithRouter('/');

        expect(screen.getByText(/Reset/i)).toBeInTheDocument();
        expect(screen.getByText(/=/i)).toBeInTheDocument();
    });

    it('renders 404 page for invalid route', () => {
        renderWithRouter('/invalid-route');

        expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    });
});
