import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {

  afterEach(cleanup);


  it('should render correctly', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render app container <div />', () => {

    render(<App />);

    const element = screen.getByTestId('app-container');

    expect(element).toBeInTheDocument();
    
  });

  it('should render the Header Component once', async () => {

    render(<App />);

    const element = screen.getByTestId('app-header');

    expect(element).toBeInTheDocument();
  });

  it('should render the Main Component', () => {
    render(<App />);

    const element = screen.getByTestId('app-main');

    expect(element).toBeInTheDocument();
  });

  it('should render the Footer Component', () => {
    render(<App />);

    const element = screen.getByTestId('app-footer');

    expect(element).toBeInTheDocument();
  });
  
});