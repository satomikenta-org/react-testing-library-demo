import React from 'react';

import { render, cleanup, waitForElement } from 'react-testing-library';

import 'jest-dom/extend-expect' // need to use toHaveTextContent etc.

import mockAxios from 'axios';

import Fetch from './Fetch';

afterEach(cleanup);

it('fetchUsers and display firstUser id', async () => {

  // preparation
  mockAxios.get.mockResolvedValueOnce([
      {
        id: 1,
        name: "satomi"
      },
      { 
        id: 2,
        name: "satomikennta"
      }
    ]);

  // render 
  const { getByTestId } = render(<Fetch />);
  
  // assertion
  expect(getByTestId('loading')).toHaveTextContent('Loading');
  

});