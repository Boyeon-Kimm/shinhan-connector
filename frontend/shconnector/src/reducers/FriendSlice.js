import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friendList: [],
};

const FriendSlice = createSlice({
  name: "FriendSlice",
  initialState,
  reducers: {
    updateFriendList: (state, action) => {
      state.friendList = action.payload;
    },
  },
});

export default FriendSlice;
export const { updateFriendList } = FriendSlice.actions;
