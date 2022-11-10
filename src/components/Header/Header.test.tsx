import React from 'react';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header', () => {

    afterEach(cleanup);

    it('should render correctly', () => {
       const { asFragment }  = render(<Header />);

       expect(asFragment()).toMatchSnapshot();
    });

    it('should have a logo', () => {
        render(<Header />);

        const logoElement = screen.getByTestId('header-logo');

        expect(logoElement).toBeInTheDocument();
    });
    
    it('should have an image within the logo', () => {
        render(<Header />);
        
        const logoElement = screen.getByTestId('header-logo');

        const logoImg = screen.getByTestId('logoImg');
        // expect(logoImg).toBeInTheDocument();

        expect(logoElement).toContainElement(logoImg);
    });

    it('should have an image src within the logo', () => {
        render(<Header />);

        const logoImgSrc = screen.getByTestId('logoImg').getAttribute('src');

        expect(logoImgSrc).not.toBe('');
        
    });

    it('should have a navigation', () => {
        render(<Header />);

        const headerNav = screen.getByRole('nav');

        expect(headerNav).toBeInTheDocument();

    });

    it('navigation should have an unordered list with at least one link', () => {
        render(<Header />);

        const headerNav = screen.getByRole('nav');

        within(headerNav).getByRole('list');
        within(headerNav).getAllByRole('listitem');

    });

    it('Has a link to the home page', () => {
        render(<Header />);

        const menu = screen.getByTestId('nav-content');

        expect(menu).toBeInTheDocument();
        within(menu).getByText(/Home/);
        
    });

    it('Has a link to my github', () => {
        render(<Header />);

        const menu = screen.getByTestId('nav-content');

        expect(menu).toBeInTheDocument();
        within(menu).getByText(/GitHub/);
    });

    it('Has a link to contact me', () => {
        render(<Header />);

        const menu = screen.getByTestId('nav-content');

        expect(menu).toBeInTheDocument();
        within(menu).getByText(/Contact/);
    });

    it('opens the mobile nav when clicking the toggle button', () => {
        render(<Header />);

        const button = screen.getByTestId('toggleMenuButton');

        fireEvent.click(button);

        expect(screen.getByTestId('nav-content')).not.toHaveClass('hidden');

        fireEvent.click(button);

        expect(screen.getByTestId('nav-content')).toHaveClass('hidden');


    });

});