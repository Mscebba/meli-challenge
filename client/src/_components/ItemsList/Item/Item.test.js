import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';

import Item from './Item';

const item = {
  id: 'MLA680573238',
  title: 'Zapato Vulcano',
  location: 'Villa devoto',
  price: {
    currency: 'ARS',
    amount: 2199,
    decimals: 0,
  },
  picture: 'http://http2.mlstatic.com/D_645465-MLA31037702912_062019-O.jpg',
  condition: 'new',
  free_shipping: false,
};

describe('Item', () => {
  test('Carga elementos del componente Item', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Item {...item} />
      </Router>
    );

    const items = screen.getAllByRole('img');
    expect(items).toHaveLength(1);

    expect(screen.getByText('Zapato Vulcano')).toBeInTheDocument();
    expect(screen.getByText('Villa devoto')).toBeInTheDocument();
  });

  test('URL y alt de la imagen principal', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Item {...item} />
      </Router>
    );

    const image = screen.getByAltText(item.title);

    expect(image).toHaveAttribute('src', item.picture);
    expect(image).toHaveAttribute('alt', item.title);
  });

  test('Carga el icono de envio gratis', () => {
    const history = createMemoryHistory();
    item.free_shipping = true;
    render(
      <Router history={history}>
        <Item {...item} />
      </Router>
    );

    const items = screen.getAllByRole('img');
    expect(items).toHaveLength(2);

    const icono = screen.getByAltText('Envio gratis');

    expect(icono).toHaveAttribute('src', 'ic_shipping@2x.png');
  });
});
