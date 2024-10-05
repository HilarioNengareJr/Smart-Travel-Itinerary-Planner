import React from 'react';

interface InputComponentProps {
    value: string;
    onChange: (value: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ value, onChange }) => {
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
                    onChange={(e) => onChange(e.target.value)}
                    required
                />
                <span className='material-symbols-outlined absolute inset-y-1/3 left-3 pr-flex items-center'>
                    search
                </span>
            </div>
        </div>
    );
}

export default InputComponent;
