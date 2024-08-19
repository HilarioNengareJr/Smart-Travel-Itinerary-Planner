import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./calendar/calendarSlice"

const store = configureStore({
    reducer: {
        calendar: calendarSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;