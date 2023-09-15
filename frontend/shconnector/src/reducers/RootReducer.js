import { combineReducers } from '@reduxjs/toolkit';
import TestSlice from './TestSlice';
import CalendarSlice from './CalendarSlice';
import LoginSlice from './LoginSlice';

const rootReducer = combineReducers({
  test: TestSlice.reducer,
  calendar: CalendarSlice.reducer,
  login: LoginSlice.reducer,
});

export default rootReducer;
