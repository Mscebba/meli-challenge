import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BreadCrumb from './BreadCrumb';

const mockData = ['item uno', 'item dos', 'item tres'];

describe('BreadCrumb', () => {
  test('Genera bien el breadcrumb', () => {
    render(<BreadCrumb items={mockData} />);

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);

    expect(screen.getByText('item uno')).toBeInTheDocument();
    expect(screen.getByText('item dos')).toBeInTheDocument();
    expect(screen.getByText('item tres')).toBeInTheDocument();
  });
});
