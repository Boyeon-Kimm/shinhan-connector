import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: null, //빈 문자열 하면 리덕스에서 가져갔을 때 undefined 처리되므로 주의
  marked: {},
};

const CalendarSlice = createSlice({
  name: 'CalendarSlice',
  initialState,
  reducers: {
    initAll: (state) => {
      state = initialState;
    },
    updateSelected: (state, action) => {
      state.selected = action.payload;
    },
    updateMarked: (state, action) => {
      state.marked = action.payload;
    },
  },
});

export default CalendarSlice;
export const { initAll, updateSelected, updateMarked } = CalendarSlice.actions;
