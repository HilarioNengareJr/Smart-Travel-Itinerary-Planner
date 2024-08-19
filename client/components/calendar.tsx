import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [activeTab, setActiveTab] = useState('Dates');
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='pt-40 px-44 grid grid-rows-2 gap-4 relative'>
      {/* Heading Section */}
      <div className='flex flex-col'>
        <span className='pb-4 text-2xl font-bold'>
          When do you want to go?
        </span>
        <span className='font-thin'>
          Choose a date range or length of stay, up to 7 days.
        </span>
      </div>

      {/* Button Group for Dates and Trip Length */}
      <div className='bg-gray-300 rounded-full flex flex-row justify-center h-12 p-1'>
        <button
          className={`w-1/2 ${activeTab === 'Dates' ? 'bg-white' : 'hover:bg-gray-400'} rounded-full`}
          onClick={() => setActiveTab('Dates')}
        >
          Dates (MM/DD)
        </button>
        <button
          className={`w-1/2 ${activeTab === 'TripLength' ? 'bg-white' : 'hover:bg-gray-400'} rounded-full`}
          onClick={() => setActiveTab('TripLength')}
        >
          Trip Length
        </button>
      </div>

      {/* Conditional Rendering of Content */}
      <div className='mt-8'>
        {activeTab === 'Dates' ? (
          <div>
            {/* Calendar Component */}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              inline
            />
          </div>
        ) : (
          <div className='flex flex-col items-center'>
            {/* Trip Length Selector */}
            <div className='flex items-center space-x-2'>
              <span>Total days</span>
              <button className='bg-gray-400 rounded-full p-2'>-</button>
              <span className='text-lg'>3</span>
              <button className='bg-gray-400 rounded-full p-2'>+</button>
            </div>

            <div className='mt-8 flex space-x-2'>
              {/* Month Selector */}
              {['August', 'September', 'October', 'November', 'December', 'January', 'February'].map((month) => (
                <button key={month} className='bg-gray-200 rounded-full px-4 py-2'>
                  {month}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
