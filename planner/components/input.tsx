import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecommendations } from '../api/wikitravelApi';
import { setUserSelections } from '../state/calendar/calendarSlice';
import { RootState } from '../state/store';

interface InputComponentProps {
    value: string;
    onChange: (value: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ value, onChange }) => {
    const dispatch = useDispatch();
    const userSelections = useSelector((state: RootState) => state.calendar.userSelections);
    const [recommendations, setRecommendations] = useState<any[]>([]);

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        onChange(query);
        if (query) {
            dispatch(fetchRecommendations(query, userSelections));
        } else {
            setRecommendations([]);
        }
    };

    return (
        <div className='pt-40 grid grid-rows-2 gap-4 items-center justify-items-center relative'>
            <label htmlFor='location' className='pb-10 text-2xl font-bold'>
                Where do you want to go?
            </label>
            <div className='relative w-1/2'>
                <input
                    type='text'
                    id='location'
                    name='location'
                    placeholder='Search by country, city or town'
                    className='p-4 w-full border border-gray-200 border-2 outline-blue-200 rounded-full pl-10 pr-10'
                    value={value}
                    onChange={handleInputChange}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleInputChange(e as unknown as React.ChangeEvent<HTMLInputElement>);
                        }
                    }}
                    required
                />
                <span className='material-symbols-outlined absolute inset-y-1/3 left-3 pr-flex items-center'>
                    search
                </span>
            </div>
            {recommendations.length > 0 && (
                <div className='mt-4'>
                    <h3 className='text-xl font-bold'>Recommendations:</h3>
                    <ul>
                        {recommendations.map((rec, index) => (
                            <li key={index}>{rec.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default InputComponent;
