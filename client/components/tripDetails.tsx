import React, { useState } from 'react';


const TripDetails: React.FC = () => {

    const [selectedOption, setSelectedOption] = useState("");

    const options = [
        { id: 'solo', label: 'Alone', icon: '👤' },
        { id: 'partner', label: 'Partner', icon: '💑' },
        { id: 'friends', label: 'Friends', icon: '👥' },
        { id: 'family', label: 'Family', icon: '👪' },
    ]

    return (
        <div className='pt-40 pb-0 px-44 grid grid-rows-2 gap-4 relative'>
            <div className='flex flex-col'>
                <span className='pb-4 text-2xl font-bold'> Who is coming with you?</span>
                <span className='font-thin'>Choose one.</span>
                <div className="flex justify-around pt-16 px-16">{options.map((option) => {
                    return (
                        <button key={option.id}
                            className={`flex flex-col items-center justify-around w-40 h-40 p-7 rounded-lg border-2 
                        ${selectedOption === option.id ? 'border-black' : 'border-gray-200'}`} onClick={() => setSelectedOption(option.id)} >
                            <span className="text-3xl mb-2">{option.icon}</span>
                            <span className={`${selectedOption === option.id ? 'text-black' : 'text-gray-600'}`}>
                                {option.label}
                            </span>
                        </button>
                    )
                })}
                </div>
                <div className='grid grid-rows-2 gap-4'>
                    <span className='pt-16 text-2xl font-bold'> Are you travelling with children?</span>
                    <div className='grid grid-cols-2 gap-2'>
                        <button className=''>
                            Yes
                        </button>
                        <button>
                            No
                        </button>
                    </div>
                </div>
                <div className='grid grid-rows-2 gap-4'>
                    <span className='pt-4 text-2xl font-bold'> Are you travelling with pets?</span>
                    <div className='grid grid-cols-2 gap-2'>
                        <button>
                            Yes
                        </button>
                        <button>
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default TripDetails;