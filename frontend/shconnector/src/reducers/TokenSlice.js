import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: null,
  refreshToken: null,
};

const TokenSlice = createSlice({
  name: 'TokenSlice',
  initialState,
  reducers: {
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    updateRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

export default TokenSlice;
export const { updateAccessToken, updateRefreshToken } = TokenSlice.actions;
