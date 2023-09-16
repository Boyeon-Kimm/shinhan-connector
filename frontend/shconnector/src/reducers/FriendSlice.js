import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friendItems: [],
};

const FriendSlice = createSlice({
  name: "FriendSlice",
  initialState,
  reducers: {
    updateFriendItems: (state, action) => {
      state.friendItems = action.payload;
    },
  },
});

export default FriendSlice;
export const { updateFriendItems } = FriendSlice.actions;
