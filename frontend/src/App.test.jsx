import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicSelect from './presentation/Select';
import { LabelTitle } from './presentation/ui';
import Search from './components/Input';
import userEvent from '@testing-library/user-event';
import Home from './dashboard/Home';

test('renders BasicSelect', () => {
  render(<BasicSelect options={['to', 'left', 'right', 'bottom']} value={'to'} />);
  const toElement = screen.getByText('to'); // random letter
  expect(toElement).toBeInTheDocument();
});

test('render LabelTitle', () => {
  render(<LabelTitle>LabelTitle</LabelTitle>);
  const labelTitleElement = screen.getByText('LabelTitle');
  expect(labelTitleElement).toBeInTheDocument();
})

test('calls the onChange callback handler', async () => {
  const onChange = jest.fn();

  render(<Search onChange={onChange} value="">Search: </Search>);
  await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

  expect(onChange).toHaveBeenCalledTimes(10);
})

test('render Search component', async () => {
  render(<Search onChange={() => {}} value="">Search: </Search>);
  const labelTitleElement = screen.getByText('Search:');
  expect(labelTitleElement).toBeInTheDocument();
})

test('render Home component', async () => {
  render(<Home />);
  const labelTitleElement = screen.getByText('New presentation');
  expect(labelTitleElement).toBeInTheDocument();
})
