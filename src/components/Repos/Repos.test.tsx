import React from 'react';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Repos from './Repos';
import reportWebVitals from '../../reportWebVitals';

describe('repos', () => {

    it('has a title in a h2', () => {
        render(<Repos />);

        const heading = screen.getByRole('heading', { level: 2 });

        expect(heading).toBeInTheDocument();
    });

    it('should only have one h2 element', () => {
        render(<Repos />);

        const heading = screen.getAllByRole('heading', { level: 2 });

        expect(heading.length).toEqual(1);
    });

    it('has text of Public Repos in the h2', () => {
        render(<Repos />);

        const heading = screen.getByRole('heading', { level: 2 });

        expect(heading).toHaveTextContent('Public Repos');
    });

    it('each repo should have an image', () => {
        render(<Repos />);

        const repoImages = screen.getAllByTestId('repo-image');

        expect(repoImages[0]).toBeInTheDocument(); 
        
    });

    it('each repo should have a name', () => {
        render(<Repos />);

        const repoNames = screen.getAllByTestId('repo-name');

        expect(repoNames[0]).toBeInTheDocument(); 
    });

    it('each repo should have a repo link', () => {
        render(<Repos />);

        const repo = screen.getByTestId('repo-github-link');

        expect(repo).toHaveTextContent('Repo');
    });

    it('each repo should have a view link', () => {
        render(<Repos />);

        const repo = screen.getByTestId('repo-view-link');

        expect(repo).toHaveTextContent('View');
    });


});