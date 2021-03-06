import { Dispatch } from 'react';
import { UserActions } from './user.reducer';
import { usersAPI } from "../services/api";

export const getUsers = async (dispatch: Dispatch<any>) => {
  dispatch({
    type: UserActions.gettingUsers,
  });
  const { data } = await usersAPI.get('/users')
  dispatch({
    type: UserActions.setUsers,
    payload: data
  });
};