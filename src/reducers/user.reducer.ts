import { IUser } from './../types/IUser';

export enum UserActions {
  getUser = 'GET_USERS',
  gettingUsers = 'GETTING_USERS',
  setUsers = 'SET_USERS',
  deleteUser = 'DELETE_USER',
  starUser = 'STAR_USER',
}

type Action =
  | { type: UserActions.gettingUsers }
  | { type: UserActions.setUsers, payload: IUser[] }
  | { type: UserActions.deleteUser, payload: { id: number } }
  | { type: UserActions.starUser, payload: { id: number } }

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
    case UserActions.starUser:
      const users = state.list.map((userItem: IUser) => {
        if (userItem.id === action.payload.id) {
          return { ...userItem, isFavorite: !userItem.isFavorite }
        }
        return userItem
      })
      return {
        ...state,
        list: users,
        loading: false
      };
    default:
      throw new Error("Unknown action type");
  }
};