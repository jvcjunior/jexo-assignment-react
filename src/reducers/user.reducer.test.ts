import { useReducer } from 'react';
import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { usersReducer } from './user.reducer';

describe('', ()=> {
  it('returns new state for "SET_USERS" type', () => {
    const initialState = [1];
    const updateAction = { type: 'SET_USERS', payload: [1, 2, 3] };
    //@ts-ignore
    const updatedState = usersReducer(initialState, updateAction);
    expect(updatedState.list).toEqual([1, 2, 3]);
  });
  it('returns new state for "SET_USERS" type using dispatch', () => {
      expect.assertions(1);
      const { result } = renderHook(() => useReducer(usersReducer, []));
      const [, dispatch] = result.current;
      act(() => {
        //@ts-ignore
        dispatch({ type: 'SET_USERS', payload: [1, 2, 3]});
      });
      const [state] = result.current;
      expect(state.list).toEqual([1, 2, 3])
  });

  it("throws an error when dispatched with an unknown action type", () => {
      expect.assertions(1);
      const { result } = renderHook(() => useReducer(usersReducer, []));
      const [, dispatch] = result.current;
      act(() => {
        //@ts-ignore
        dispatch({ type: "whaaat" });
      });
      expect(result.error).toEqual(Error("Unknown action type"));
  });
})