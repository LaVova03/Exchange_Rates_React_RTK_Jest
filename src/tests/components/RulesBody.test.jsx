import React from "react";
import { render, screen } from '@testing-library/react';
import RulesBody from '../../components/RulesBody/RulesBody';
import '@testing-library/jest-dom';

test('render page RulesBody', () => {
    render(<RulesBody />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(10);
    expect(screen.getByText(/Rules and Guidelines/i)).toBeInTheDocument();
})