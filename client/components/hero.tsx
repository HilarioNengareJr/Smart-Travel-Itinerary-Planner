import React from 'react';
import Image from 'next/image';


const Hero: React.FC = () => {

    interface City {
        imagePath: string;
        city: string;
    }

    const cities: City[] = [
        {
            imagePath: '/cities/varadero.jpg',
            city: 'Varadero'
        },
        {
            imagePath: '/cities/istanbul.jpg',
            city: 'Istanbul',
        },
        {
            imagePath: '/cities/orlando.jpg',
            city: 'Orlando'
        },
        {
            imagePath: '/cities/paris.jpg',
            city: 'Paris'
        },
        {
            imagePath: '/cities/playa.jpg',
            city: 'Playa del Carmen'
        },
    ]

    return (
        <div className='p-20'>

            <h1 className='font-bold text-xl pb-8'>
                Popular Destinations
            </h1>

            <ul className='flex flex-initial flex-row items-center justify-items-center'>
                {cities.map((item, index) => {

                    return (
                    <li className='pr-4 relative' key={index}>
                        <Image src={item.imagePath} className='object-cover object-center rounded-lg' width={200} height={200} alt={`{item.city}'s image`} />
                        <span className='absolute bottom-5 p-3 font-bold text-white'>
                            {item.city}
                        </span>
                    </li>)

                })}
            </ul>
        </div>
    );
}

export default Hero;