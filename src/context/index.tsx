import React, { createContext, useReducer } from 'react';
import { usersReducer } from '../reducers/user.reducer';
import { IUser } from '../types/IUser';

type InitialStateType = {
  users: {
    list: IUser[];
    loading: boolean;
  }
}

const initialState = {
  users: {
    list: [],
    loading: false 
  }
}

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = ({ users } : { users: IUser[]}, action: any) => ({
  users: usersReducer(users, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };