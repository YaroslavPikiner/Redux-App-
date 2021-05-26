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

    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      const profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // не посылайте подобную информацию напрямую, на ваш сервер!
      console.log('Full Name: ' + profile.getName());
      console.log('Given Name: ' + profile.getGivenName());
      console.log('Family Name: ' + profile.getFamilyName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
      // токен
      const id_token = googleUser.getAuthResponse().id_token;
      console.log('ID Token: ' + id_token);
    });

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
