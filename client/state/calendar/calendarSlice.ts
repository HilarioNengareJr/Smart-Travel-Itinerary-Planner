import {createSlice, PayloadAction } from '@reduxjs/toolkit';

// store interface definition
interface CalendarState {
   tripLength: number;
    startDate: Date | null;
    endDate: Date | null;
    activeTab: 'Dates' | 'TripLength';
}

// types for actions
type CalendarAction =
    { type: 'SET_START_DATE'; payload: Date | null }
    | { type: 'SET_END_DATE'; payload: Date | null }
    | { type: 'SET_ACTIVE_TAB'; payload: 'Dates' | 'TripLength' }
    | { type: 'SET_TRIP_LENGTH'; payload: number };

const initialState: CalendarState = {
   tripLength: 3,
    startDate: null,
    endDate: null,
    activeTab: 'Dates',
}


const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setStartDate(state, action: PayloadAction<Date | null>) {
            state.startDate = action.payload;
        },
        setEndDate(state, action: PayloadAction<Date | null>) {
            state.endDate = action.payload;
        },
        setActiveTab(state, action: PayloadAction<'Dates' | 'TripLength'>) {
            state.activeTab = action.payload;
        },
        setTripLength(state, action: PayloadAction<number>) {
            state.tripLength = action.payload;
        },
    },
});


export const { setStartDate, setEndDate, setActiveTab, setTripLength } = calendarSlice.actions;
export default calendarSlice.reducer;

