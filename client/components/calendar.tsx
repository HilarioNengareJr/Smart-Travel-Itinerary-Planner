import React from 'react';


const Calendar: React.FC = () => {
    return (
        <div className='pt-40 px-24 grid grid-rows-2 gap-4 relative'>
           <div className='flex flex-col'>
           <span className='pb-4 text-2xl font-bold'>
                When do you want to go?
            </span>
            <span className='font-thin'>
                Choose a date range or length of stay, up to 7 days.
            </span>
           </div>
        </div>
    );
}

export default Calendar;