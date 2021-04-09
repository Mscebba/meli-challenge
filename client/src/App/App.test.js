import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

describe('App', () => {
  render(<App />);
  // screen.debug();

  test('Renderea los elementos de App', () => {
    //logo
    expect(screen.getByAltText('MercadoLibre')).toBeInTheDocument();

    //input
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('no dejes nunca de comprar')
    ).toBeInTheDocument();

    // boton de search
    expect(screen.getByRole('button', { type: 'submit' })).toBeInTheDocument();
  });
});
