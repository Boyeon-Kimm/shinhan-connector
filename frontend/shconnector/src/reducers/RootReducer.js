import { combineReducers } from '@reduxjs/toolkit';
import TestSlice from './TestSlice';
import CalendarSlice from './CalendarSlice';

const rootReducer = combineReducers({
  test: TestSlice.reducer,
  calendar: CalendarSlice.reducer,
});

export default rootReducer;
