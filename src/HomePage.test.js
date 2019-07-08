import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import HomePage from './HomePage';


let target = {};
beforeEach(() => {
  const { getByText } = render(<HomePage/>);
  target = getByText;
});
afterEach(cleanup);

it('should render HomePage', () => {
  const div = target('This is HomePage');
  expect(div).toBeDefined();
});

it('should render Title when clicked', () => {
  const btn = target('Login');
  fireEvent.click(btn);
  const titleDiv = target('Welcome');
  expect(titleDiv).toBeDefined();
});
