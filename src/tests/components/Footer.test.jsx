import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../../components/Footeer/Footer';

describe('render Footer', () => {
    it('renders all sections correctly', async () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        // Проверяем, что список рендерится
        const lists = screen.getAllByRole('list');
        expect(lists).toHaveLength(3);

        // Проверяем, что элементы списка рендерятся
        const listItems = screen.getAllByRole('listitem');
        expect(listItems.length).toBeGreaterThan(3); // Учтите, что это может быть более 3

        // Проверяем, что текст "Контакти:" отображается
        const contact = screen.getByText('Контакти:');
        expect(contact).toBeInTheDocument();

        // Проверяем наличие социальных иконок
        const youtubeIcon = screen.getByAltText('YouTube');
        expect(youtubeIcon).toBeInTheDocument();

        const facebookIcon = screen.getByAltText('Facebook');
        expect(facebookIcon).toBeInTheDocument();

        const instagramIcon = screen.getByAltText('Instagram');
        expect(instagramIcon).toBeInTheDocument();
    });
});
