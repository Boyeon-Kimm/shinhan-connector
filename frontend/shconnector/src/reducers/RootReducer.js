import { combineReducers } from '@reduxjs/toolkit';
import TestSlice from './TestSlice';
import CalendarSlice from './CalendarSlice';
import TokenSlice from './TokenSlice';

const rootReducer = combineReducers({
  test: TestSlice.reducer,
  calendar: CalendarSlice.reducer,
  token: TokenSlice.reducer,
});

export default rootReducer;
