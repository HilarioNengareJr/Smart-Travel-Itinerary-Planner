import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const MAX_STAY_DURATION = 7;

// store interface definition
interface CalendarState {
    tripLength: number;
    startDate: Date | null;
    endDate: Date | null;
    activeTab: 'Dates' | 'TripLength';
    recommendations: any[];
    userSelections: any;
}

const initialState: CalendarState = {
    tripLength: 3,
    startDate: null,
    endDate: null,
    activeTab: 'Dates',
    recommendations: [],
    userSelections: {},
}


const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setStartDate(state, action: PayloadAction<Date | null>) {
            state.startDate = action.payload;

            if (state.startDate && state.endDate) {
                const diffTime = Math.abs(state.endDate.getTime() - state.startDate.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays > MAX_STAY_DURATION) {
                    state.endDate = new Date(state.startDate.getTime() + MAX_STAY_DURATION * 24 * 60 * 60 * 1000);
                }
            }
        },
        setEndDate(state, action: PayloadAction<Date | null>) {
            state.endDate = action.payload;
            if (state.startDate && state.endDate) {
                const diffTime = Math.abs(state.endDate.getTime() - state.startDate.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays > MAX_STAY_DURATION) {
                    state.endDate = new Date(state.startDate.getTime() + MAX_STAY_DURATION * 24 * 60 * 60 * 1000);
                }
            }
        },
        setActiveTab(state, action: PayloadAction<'Dates' | 'TripLength'>) {
            state.activeTab = action.payload;
        },
        setTripLength(state, action: PayloadAction<number>) {
            state.tripLength = Math.min(MAX_STAY_DURATION, Math.max(1, action.payload));
        },
        setRecommendations(state, action: PayloadAction<any[]>) {
            state.recommendations = action.payload;
        },
        setUserSelections(state, action: PayloadAction<any>) {
            state.userSelections = action.payload;
        },
    },
});


export const { setStartDate, setEndDate, setActiveTab, setTripLength, setRecommendations, setUserSelections } = calendarSlice.actions;
export default calendarSlice.reducer;

