import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: '',
  marked: {},
};

const CalendarSlice = createSlice({
  name: 'CalendarSlice',
  initialState,
  reducers: {
    updateSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export default CalendarSlice;
export const { updateSelected } = CalendarSlice.actions;
