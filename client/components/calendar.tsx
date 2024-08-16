import React from 'react';


const Calendar: React.FC = () => {
    return (
        <div className='pt-40 px-44 grid grid-rows-2 gap-4 relative'>
           <div className='flex flex-col'>
           <span className='pb-4 text-2xl font-bold'>
                When do you want to go?
            </span>
            <span className='font-thin'>
                Choose a date range or length of stay, up to 7 days.
            </span>
           </div>
           <div className='bg-gray-300 rounded-full flex flex-row justify-center h-12 p-1'>
            <button className='w-1/2 focus:bg-white hover:bg-gray-400 rounded-full'>
                Dates (MM/DD)
            </button>
            <button className='w-1/2 focus:bg-white hover:bg-gray-400 rounded-full'>
                Trip Length
                </button>
           </div>
        </div>
    );
}

export default Calendar;