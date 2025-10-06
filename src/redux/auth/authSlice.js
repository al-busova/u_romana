import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, getCurrentUser } from './authOperations';

const initialState = {
  user: null,
  token: '',
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // ✅ registration
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })

      // ✅ login
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })

      // ✅ logout
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })

      // ✅ спец-кейс: fetchCurrentUser
      .addCase(getCurrentUser.pending, state => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isFetchingCurrentUser = false;
        state.isLoading = false;
        state.error = action.payload;
      })

      // ✅ общие обработчики для всех pending / rejected
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
