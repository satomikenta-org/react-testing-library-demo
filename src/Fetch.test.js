import React from 'react';

import { render, cleanup, waitForElement } from 'react-testing-library';

// Need to Install jest-dom manually!!
import 'jest-dom/extend-expect' // need to use assertion like 'toHaveTextContent etc'. 

import axiosMock from 'axios';

import Fetch from './Fetch';

afterEach(cleanup);

it('fetchUsers and display firstUser id', async () => {

  // preparation for Mock
  axiosMock.get.mockResolvedValueOnce({ data: [{id:1, name: "satomi"}, {id:2, name: "kenta"}] });

  // render 
  const { getByTestId } = render(<Fetch />);
  expect(getByTestId("loading")).toHaveTextContent("Loading data...");
  
  // Allが付いていないqueryは複数ヒットするとerror. (ex getByTestIdで複数ヒット=> error;  use getAllByTestId instead); 
  const resolvedElm = await waitForElement(() => getByTestId("user1"));  // data-testid={`user${i}`}
  expect(resolvedElm).toHaveTextContent("kenta");  // users[1].name;

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
});