import { RootState } from '../state/store';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { setRecommendations } from '../state/calendar/calendarSlice';

const dummyRecommendations = [
    {
        title: 'Paris',
        image: 'https://example.com/paris.jpg',
        bookingLink: 'https://example.com/book/paris',
    },
    {
        title: 'New York',
        image: 'https://example.com/newyork.jpg',
        bookingLink: 'https://example.com/book/newyork',
    },
    {
        title: 'Tokyo',
        image: 'https://example.com/tokyo.jpg',
        bookingLink: 'https://example.com/book/tokyo',
    },
];

export const fetchDummyRecommendations = (query: string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    try {
        // Simulate an API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Filter recommendations based on the query
        const filteredRecommendations = dummyRecommendations.filter(rec =>
            rec.title.toLowerCase().includes(query.toLowerCase())
        );

        dispatch(setRecommendations(filteredRecommendations));
    } catch (error) {
        console.error('Error fetching dummy recommendations:', error);
        dispatch(setRecommendations([])); // Clear recommendations on error
    }
};
