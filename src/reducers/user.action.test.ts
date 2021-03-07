import { useReducer } from 'react';
import axios from 'axios';
import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { getUsers } from './user.action';
import { usersReducer } from './user.reducer';

jest.mock('axios');

describe('User Action Creator', () => {
  it('should update state when action [getUsers] is called', async () => {
      const mockedAxios = axios as jest.Mocked<typeof axios>;
      mockedAxios.get.mockResolvedValue({ data: [1,2,3] });

      const { result } = renderHook(() => useReducer(usersReducer, []));
      const [, dispatch] = result.current;
      await act(async () => {
        await getUsers(dispatch);
      });
      const [state] = result.current;
      expect(mockedAxios.get).toHaveBeenCalled()
      expect(state.list).toEqual([1, 2, 3])
  });
})