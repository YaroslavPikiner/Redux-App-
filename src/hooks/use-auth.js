import React, { useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/actions/actions';

const authContext = createContext();
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const user = useSelector((state) => state.loginReducer.user);
  const dispatch = useDispatch();

  const signin = (email, password) => {
    if (email === 'user' && password === 'user') {
      dispatch(login());
      return true;
    }
    dispatch(logout());
    return false;
  };

  const signout = () => {
    dispatch(logout());
  };

  return {
    user,
    signin,
    signout,
  };
}
