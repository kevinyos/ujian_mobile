import {createSlice} from '@reduxjs/toolkit';

const {actions, reducer} = createSlice({
  name: 'login',
  initialState: {
    Login: [],
  },
  reducers: {
    Login: (state, action) => {
      state.Login = action.payload;
    },
    Logout: state => {
      state.Login = [];
    },
  },
});

export default reducer;
export const {Login, Logout} = actions;

export const LoginAction = data => {
  return dispatch => {
    dispatch(Login(data));
  };
};

export const LogoutAction = () => {
  return dispatch => {
    dispatch(Logout());
  };
};
