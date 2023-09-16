import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: null, //빈 문자열 하면 리덕스에서 가져갔을 때 undefined 처리되므로 주의
  marked: {},
  currYear: new Date().getFullYear(),
  currMonth: new Date().getMonth() + 1,
  schedules: [],
  daySchedules: [],
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
    updateCurrYear: (state, action) => {
      state.currYear = action.payload;
    },
    updateCurrMonth: (state, action) => {
      state.currMonth = action.payload;
    },
    updateSchedules: (state, action) => {
      state.schedules = action.payload;
    },
    updateDaySchedules: (state, action) => {
      state.daySchedules = action.payload;
    },
  },
});

export default CalendarSlice;
export const {
  initAll,
  updateSelected,
  updateMarked,
  updateCurrYear,
  updateCurrMonth,
  updateSchedules,
  updateDaySchedules,
} = CalendarSlice.actions;
