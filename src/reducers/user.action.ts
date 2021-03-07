import { Dispatch } from 'react';
import { UserActions } from './user.reducer';
import { usersAPI } from "../services/api";
import axios from 'axios';

export const getUsers = async (dispatch: Dispatch<any>) => {
  dispatch({
    type: UserActions.gettingUsers,
  });
  // const { data } = await usersAPI.get('/users')
  const result = await axios.get('https://jsonplaceholder.typicode.com/users')

  dispatch({
    type: UserActions.setUsers,
    payload: result.data
  });
};