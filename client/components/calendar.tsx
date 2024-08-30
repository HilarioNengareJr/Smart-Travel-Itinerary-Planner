import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '@/styles/calendar.module.css';
import { RootState, AppDispatch } from '@/state/store';
import { setStartDate, setEndDate, setActiveTab, setTripLength } from '@/state/calendar/calendarSlice';

const CalendarComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { startDate, endDate, activeTab, tripLength } = useSelector((state: RootState) => state.calendar);

  return (
    <div className='pt-40 px-44 grid grid-rows-2 gap-4 relative'>
      {/* Heading Section */}
      <div className='flex flex-col'>
        <span className='pb-4 text-2xl font-bold'>When do you want to go?</span>
        <span className='font-thin'>Choose a date range or length of stay, up to 7 days.</span>
      </div>

      {/* Button Group for Dates and Trip Length */}
      <div className='bg-gray-300 rounded-full flex flex-row justify-center h-12 p-1 w-full'>
        <button
          className={`w-1/2 ${activeTab === 'Dates' ? 'bg-white' : 'hover:bg-gray-400'} rounded-full`}
          onClick={() => dispatch(setActiveTab('Dates'))}
        >
          Dates (MM/DD)
        </button>
        <button
          className={`w-1/2 ${activeTab === 'TripLength' ? 'bg-white' : 'hover:bg-gray-400'} rounded-full`}
          onClick={() => dispatch(setActiveTab('TripLength'))}
        >
          Trip Length
        </button>
      </div>

      <div className='w-full mt-8 flex justify-center'>
        {activeTab === 'Dates' ? (
          <div className='w-full '>
            <div className='border round-full'>
              <span className='material-symbols-outlined '>
                    edit_calendar
                </span>
                Start 
                <span className='material-symbols-outlined '>
                    arrow_forward
                </span>
                End
                </div>
            <div className='w-full flex justify-center'>
              
              <DatePicker
                wrapperClassName='w-full' // Wrapper to ensure full width
                className='w-full' // DatePicker input to ensure full width
                selected={startDate}
                onChange={(dates: [Date | null, Date | null]) => {
                  const [start, end] = dates;
                  dispatch(setStartDate(start));
                  dispatch(setEndDate(end));
                }}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                monthsShown={2}
              />
            </div>
          </div>
        ) : (
          <div className='w-full flex flex-col items-center'>
            {/* Trip Length Selector */}
            <div className='w-full flex items-center justify-center space-x-2'>
              <span>Total days</span>
              <button
                className='bg-gray-400 rounded-full p-2'
                onClick={() => dispatch(setTripLength(Math.max(1, tripLength - 1)))}
              >
                -
              </button>
              <span className='text-lg'>{tripLength}</span>
              <button
                className='bg-gray-400 rounded-full p-2'
                onClick={() => dispatch(setTripLength(Math.min(7, tripLength + 1)))}
              >
                +
              </button>
            </div>

            <div className='mt-8 w-3/4 flex space-x-2 justify-center'>
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

export default CalendarComponent;
