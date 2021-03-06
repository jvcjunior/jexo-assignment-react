import { IUser } from './../types/IUser';

export enum UserActions {
  getUser = 'GET_USERS',
  gettingUsers = 'GETTING_USERS',
  setUsers = 'SET_USERS',
  deleteUser = 'DELETE_USER',
}

type Action =
| { type: UserActions.gettingUsers }
| { type: UserActions.setUsers, payload: IUser[] }
| { type: UserActions.deleteUser, payload: { id: number } }

export const usersReducer = (state: any, action: Action) => {
  switch (action.type) {
    case UserActions.gettingUsers:
      return {
        ...state,
        loading: true
      };
    case UserActions.setUsers:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case UserActions.deleteUser:
      const newUsersList = state.list.reduce((acc: IUser[], curr: IUser) => {             
        if (curr.id !== action.payload.id) acc.push(curr);
        return acc;
      }, []);
      
      return {
        ...state,
        list: newUsersList,
        loading: false
      };
    default:
      throw new Error("Unknown action type");
  }
};