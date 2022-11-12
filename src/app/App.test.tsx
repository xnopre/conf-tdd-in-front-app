import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

it('should renders App', () => {
    render(<App />);
    expect(screen.getByText(/Liste des expéditions/i)).toBeInTheDocument();
});
