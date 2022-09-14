import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  password: null,
  avatar: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.userName = action.payload.userName;
      state.password = action.payload.password;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    resetAuth: () => initialState,
  },
  // extraReducers: builder => {
  //   builder.addCase(PURGE, state => {
  //     AsyncStorage.multiRemove();
  //   });
  // },
});

export const {setAuth, setAvatar, resetAuth} = authSlice.actions;

export const selectUserName = state => state.userName;
export const selectAvatar = state => state.avatar;

export default authSlice.reducer;
