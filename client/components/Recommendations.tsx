import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecommendations } from '../api/wikitravelApi';
import { setRecommendations } from '../state/calendar/calendarSlice';
import { RootState } from '../state/store';

const Recommendations: React.FC = () => {
    const dispatch = useDispatch();
    const recommendations = useSelector((state: RootState) => state.calendar.recommendations);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchRecommendations('travel');
            dispatch(setRecommendations(data));
        };
        fetchData();
    }, [dispatch]);

    return (
        <div>
            <h2>Recommendations</h2>
            <ul>
                {recommendations.map((recommendation: any, index: number) => (
                    <li key={index}>{recommendation.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;
