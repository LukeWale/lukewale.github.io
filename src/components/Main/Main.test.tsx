import React from "react";
import { cleanup, render, screen } from '@testing-library/react';
import Main from './Main';
import Repos from '../Repos/Repos';

describe('Main', () => {
    
    afterEach(cleanup);
    
    it('should render correctly', () => {
        const { asFragment } = render(<Main />);

        expect(asFragment()).toMatchSnapshot();
    })

    it('has a container of main', () => {
        render(<Main />);

        expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('has a container element', () => {
        const {container} = render(<Main />);

        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const containers = container.getElementsByClassName('container');

        expect(containers.length).toBe(1);
    });

    it('has a h1 tag', () => {
        render(<Main />);

        const heading = screen.getByRole('heading', { level: 1 });

        expect(heading).toBeInTheDocument();
    });

    it('renders the repos component', () => {
        render(<Main />);

        const element = screen.getByTestId('repos');

        expect(element).toBeInTheDocument();
    });

    it('has a logo animation gif', () => {
        render(<Main />);

        const logoImage = screen.getByTestId('introImage');

        expect(logoImage).toBeInTheDocument();
    });


});