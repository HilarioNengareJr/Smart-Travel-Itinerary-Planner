import React, { useState } from 'react';


const TripDetails: React.FC = () => {

    const [selectedOption, setSelectedOption] = useState("");

    const options = [
        { id: 'solo', label: 'Going solo', icon: '👤' },
        { id: 'partner', label: 'Partner', icon: '💑' },
        { id: 'friends', label: 'Friends', icon: '👥' },
        { id: 'family', label: 'Family', icon: '👪' },
    ]

    return (
        <div className='py-40 px-44 grid grid-rows-2 gap-4 relative'>
            <div className='flex flex-col'>
                <span className='pb-4 text-2xl font-bold'> Who is coming with you?</span>
                <span className='font-thin'>Choose one.</span>
                <div>{options.map((option) => {
                    return (
                        <button key={option.id}
                            className={`flex flex-col items-center p-4 rounded-lg border-2 
                        ${selectedOption === option.id ? 'border-black' : 'border-gray-200'}`} onClick={() => setSelectedOption(option.id)} >
                            <span className="text-3xl mb-2">{option.icon}</span>
                            <span className={`${selectedOption === option.id ? 'text-black' : 'text-gray-600'}`}>
                                {option.label}
                            </span>
                        </button>
                    )
                })}
                </div>
            </div>
        </div >
    );
}

export default TripDetails;