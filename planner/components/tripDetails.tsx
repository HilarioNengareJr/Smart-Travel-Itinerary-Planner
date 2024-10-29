import React, { useState } from 'react';

const TripDetails: React.FC = () => {

    const [selectedOption, setSelectedOption] = useState<string>("");
    const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

    const options = [
        { id: 'solo', label: 'Alone', icon: '👤' },
        { id: 'partner', label: 'Partner', icon: '💑' },
        { id: 'friends', label: 'Friends', icon: '👥' },
        { id: 'family', label: 'Family', icon: '👪' },
    ];

    const activities = [
        'Must-see Attractions', 'Hidden Gems', 'Museums', 'History', 'Culture',
        'Great Food', 'Outdoors', 'Wine & Beer', 'Arts & Theatre', 'Adventure and Sports'
    ];

    const toggleActivity = (activity: string) => {
        setSelectedActivities(prev =>
            prev.includes(activity)
                ? prev.filter(a => a !== activity)
                : [...prev, activity]
        );
    };

    return (
        <div className='pt-40 flex items-center justify-center'>
            <div className='w-full max-w-4xl mx-auto px-4 py-12'>
                <div className='flex flex-col'>
                    <span className='pb-4 text-2xl font-bold'>Who is coming with you?</span>
                    <span className='font-thin'>Choose one.</span>
                    <div className="flex justify-around pt-10 px-16">
                        {options.map((option) => (
                            <button key={option.id}
                                className={`flex flex-col items-center justify-around w-40 h-40 p-7 rounded-lg border-2 
                                    ${selectedOption === option.id ? 'border-black' : 'border-gray-200'}`}
                                onClick={() => setSelectedOption(option.id)}>
                                <span className="text-3xl mb-2">{option.icon}</span>
                                <span className={`${selectedOption === option.id ? 'text-black' : 'text-gray-600'}`}>
                                    {option.label}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className='grid grid-rows-2 gap-4 pt-16'>
                        <span className='pt-10 text-2xl font-bold'>Are you travelling with children?</span>
                        <div className='grid grid-cols-2 gap-2 py-5'>
                            <button className='border rounded-full px-3 py-2 border-gray-200 flex justify-center'>
                                Yes
                            </button>
                            <button className='border rounded-full px-3 py-2 border-gray-200 flex justify-center'>
                                No
                            </button>
                        </div>
                    </div>

                    <div className='grid grid-rows-2 gap-4'>
                        <span className='pt-4 text-2xl font-bold'>Are you travelling with pets?</span>
                        <div className='grid grid-cols-2 gap-2 pt-5'>
                            <button className='border rounded-full px-3 py-2 border-gray-200 flex justify-center'>
                                Yes
                            </button>
                            <button className='border rounded-full px-3 py-2 border-gray-200 flex justify-center'>
                                No
                            </button>
                        </div>
                    </div>

                    <div className='pt-16 flex flex-col'>
                        <span className='pb-4 text-2xl font-bold'>How do you want to spend your time?</span>
                        <span className='font-thin'>Choose as many as you like.</span>
                        <div className='grid grid-cols-2 gap-4 pt-10'>
                            {activities.map((activity, index) => (
                                <button key={index}
                                    className={`px-4 py-1 rounded-full border 
                                    ${selectedActivities.includes(activity) ? 'border-black text-black' : 'border-gray-200 text-gray-700'}`}
                                    onClick={() => toggleActivity(activity)}>
                                    {activity}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TripDetails;
