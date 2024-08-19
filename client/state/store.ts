import { configureStore } from '@reduxjs/toolkit';

// store interface definition
interface TripLengthStore {
    totalDays: number;
    startDate: Date | null;
    endDate: Date | null;
    activeTab: 'dates' | 'TripLength';
}

// action types definition


const dateStore: TripLengthStore = configureStore({

})

