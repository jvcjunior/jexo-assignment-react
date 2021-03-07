import { Dispatch } from 'react';
import axios from 'axios';
import { UserActions } from './user.reducer';
import consts from '../utils/consts';

export const getUsers = async (dispatch: Dispatch<any>) => {
  dispatch({
    type: UserActions.gettingUsers,
  });
  const result = await axios.get(`${consts.API_URL}/users`)

  dispatch({
    type: UserActions.setUsers,
    payload: result.data
  });
};