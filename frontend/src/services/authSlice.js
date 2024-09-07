import { Cookie } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

const getIsLogdin = () => {
  const token = Cookies.get('token');
  if (token) {
    try {
      const decoded=jwtDecode(token);
      console.log(decoded);
      return true;
    } catch (error) {
      console.error("Failed to decode token", error);
      return false;
    }
  } else {
    return false;
  }
};


const initialState = {
  isLoggedIn:getIsLogdin(),
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = true;
      Cookie.set();
      state.user = action.payload; 
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { setLogin, logout } = authSlice.actions;

export default authSlice.reducer;
