import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: null,
  password: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setAuth} = authSlice.actions;

export const selectUsername = state => state.auth.username;

export default authSlice.reducer;
