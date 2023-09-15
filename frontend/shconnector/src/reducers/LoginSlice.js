import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accountNo: null,
  memberNo: null,
  id: null,
  name: null,
  age: null,
  gender: null,
  contact: null,
  accessToken: null,
  refreshToken: null,
};

const LoginSlice = createSlice({
  name: 'LoginSlice',
  initialState,
  reducers: {
    updateAccountNo: (state, action) => {
      state.accountNo = action.payload;
    },
    updateMemberNo: (state, action) => {
      state.memberNo = action.payload;
    },
    updateId: (state, action) => {
      state.id = action.payload;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
    updateGender: (state, action) => {
      state.gender = action.payload;
    },
    updateContact: (state, action) => {
      state.contact = action.payload;
    },
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    updateRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

export default LoginSlice;
export const {
  updateAccountNo,
  updateMemberNo,
  updateId,
  updateName,
  updateAge,
  updateGender,
  updateContact,
  updateAccessToken,
  updateRefreshToken,
} = LoginSlice.actions;
