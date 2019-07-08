import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';
import App from './App';



let target = {};

beforeEach(() => {
  const { getByText } = render(<App/>);
  target = getByText;
});
afterEach(cleanup);


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows initial count', () => {
  const div = target('0');
  expect(div).toBeDefined();
});

it('shows incremented count', () => {
  const button = target('Click to Increment!!');
  for( let i = 0; i < 10; i++) {
    fireEvent.click(button);
  }
  const div = target('10');
  expect(div).toBeDefined();
});

