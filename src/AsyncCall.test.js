import mockAxios from './__mocks__/axios';
import { fetchUsers } from './AsyncCall';

it('should return empty array', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: [{ id: 1, name: "satomi"}]}));
  const data  = await fetchUsers();
  console.log(data);
  expect(data).toEqual([{id: 1, name: "satomi"}]);
});