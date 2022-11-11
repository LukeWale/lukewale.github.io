import React from 'react';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Repos from './Repos';

describe('repos', () => {

    it('has a title in a h2', () => {
        render(<Repos />);

        const heading = screen.getByRole('heading', { level: 2 });

        expect(heading).toBeInTheDocument();
    });

});