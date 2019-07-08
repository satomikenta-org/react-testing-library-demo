import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Login from './Login';


let target = {};
let targetId = {};
beforeEach(() => {
  const { getByText, getByTestId } = render(<Login/>);
  target = getByText;
  targetId = getByTestId
});

afterEach(cleanup);


it('should have email and password value', () => {
  const emailInput = targetId('email');
  const passwordInput = targetId('password');
  fireEvent.change(emailInput, {target: {value: 'satomi@gmail.com'}});
  fireEvent.change(passwordInput, {target: {value: '12345'}});

  expect(emailInput.value).toBe('satomi@gmail.com')
  expect(passwordInput.value).toBe('12345') 
});

it('should validate password', () => {
  const emailInput = targetId('email');
  const passwordInput = targetId('password');
  const btn = target('Login');
  fireEvent.change(emailInput, {target: {value: 'satomi@gmail.com'}});
  fireEvent.change(passwordInput, {target: {value: '1234'}});
  fireEvent.click(btn);
  expect(targetId('error').innerHTML).toBe('Invalid Password')
});

