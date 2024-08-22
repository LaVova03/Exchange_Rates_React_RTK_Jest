import React from "react";
import Rules from "../../containers/Rules/Rules";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

test('render page Rules', () => {
    render(<Rules />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(10);
    expect(screen.getByText(/Rules and Guidelines/i)).toBeInTheDocument();
})