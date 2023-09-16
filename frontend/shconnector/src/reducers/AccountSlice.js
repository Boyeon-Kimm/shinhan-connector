import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountList: [],
};

const AccountSlice = createSlice({
  name: "AccountSlice",
  initialState,
  reducers: {
    updateAcountList: (state, action) => {
      state.accountList = action.payload;
    },
  },
});

export default AccountSlice;
export const { updateAcountList } = AccountSlice.actions;
