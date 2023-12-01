import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DropDown from '../Layout/DropDown';

test('renders DropDown component', () => {
  render(
  <MemoryRouter>
    <DropDown/>
    </MemoryRouter>);

   const DropElement = screen.getByTestId('Dropdown');
  
   expect(DropElement).toBeInTheDocument();
});

test('test', () => {
  expect(true).toBe(true);
})

