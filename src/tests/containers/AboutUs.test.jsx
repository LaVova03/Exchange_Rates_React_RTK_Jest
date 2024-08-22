import React from "react";
import { render, screen } from '@testing-library/react';
import AboutUs from "../../containers/AboutUs/AboutUs";
import '@testing-library/jest-dom';

test('render page AboutUs', () => {
    render(<AboutUs />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(4);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
})