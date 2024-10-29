import axios from 'axios';
import { RootState } from '../state/store';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { setRecommendations } from '../state/calendar/calendarSlice';

const WIKIVOYAGE_API_URL = 'https://wikivoyage.org/wiki/en/api.php';

export const fetchRecommendations = (query: string, userSelections: any): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    const response = await axios.get(WIKIVOYAGE_API_URL, {
        params: {
            action: 'query',
            list: 'search',
            srsearch: query,
            format: 'json',
        },
    });
    const recommendations = response.data.query.search.map((rec: any) => ({
        ...rec,
        relevance: calculateRelevance(rec, userSelections),
    }));
    dispatch(setRecommendations(recommendations));
};

const calculateRelevance = (rec: any, userSelections: any) => {
    // Implement your relevance calculation logic here
    return 0;
};
