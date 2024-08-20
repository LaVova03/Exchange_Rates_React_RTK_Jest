import React from "react";
import { render, screen } from '@testing-library/react';
import Header from "../../components/Header/Header";
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('render and function on Header', () => {
    it('render', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const list = screen.getByRole('list');
        expect(list).toBeInTheDocument();

        const listItem = screen.getAllByRole('listitem');
        expect(listItem).toHaveLength(5);

        expect(screen.getByText('Main')).toBeInTheDocument();
        expect(screen.getByText('Sales')).toBeInTheDocument();
        expect(screen.getByText('Contacts')).toBeInTheDocument();
        expect(screen.getByText('Rules')).toBeInTheDocument();
        expect(screen.getByText('About Us')).toBeInTheDocument();
    })
})