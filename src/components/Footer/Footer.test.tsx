import React from "react";
import { cleanup, render, screen, within } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    afterEach(cleanup);

    it('should render correctly', () => {
        const { asFragment } = render(<Footer />);

        expect(asFragment()).toMatchSnapshot();
    })

    it('should have copyright text', () => {
        render(<Footer />);

        const footer = screen.getByTestId('app-footer');

        within(footer).getByText(/Copyright Luke Wale/)
    });

    it('should have a navigation', () => {
        render(<Footer />);

        const footerNav = screen.getByRole('nav');

        expect(footerNav).toBeInTheDocument();

    });

    it('navigation should have an unordered list with at least one link', () => {
        render(<Footer />);

        const footerNav = screen.getByRole('nav');

        within(footerNav).getByRole('list');
        within(footerNav).getAllByRole('listitem');

    });

    it('Has a link to the home page', () => {
        render(<Footer />);

        const menu = screen.getByTestId('nav-content');

        expect(menu).toBeInTheDocument();
        within(menu).getByText(/Home/);
        
    });

    it('Has a link to my github', () => {
        render(<Footer />);

        const menu = screen.getByTestId('nav-content');

        expect(menu).toBeInTheDocument();
        within(menu).getByText(/GitHub/);
    });

    it('Has a link to contact me', () => {
        render(<Footer />);

        const menu = screen.getByTestId('nav-content');

        expect(menu).toBeInTheDocument();
        within(menu).getByText(/Contact/);
    });


});