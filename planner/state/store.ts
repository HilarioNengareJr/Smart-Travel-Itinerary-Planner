import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import calendarReducer from './calendar/calendarSlice';

export const store = () =>
  configureStore({
    reducer: {
      calendar: calendarReducer,
    },
  });

export type RootState = ReturnType<ReturnType<typeof store>['getState']>;
export type AppDispatch = ReturnType<typeof store>['dispatch'];

export const wrapper = createWrapper(store);

// Ensure the new state is included in the store
export const selectUserSelections = (state: RootState) => state.calendar.userSelections;
