import React from 'react';
import {useRouter} from  'next/router';

interface ButtonProps {
    sharedProgress: number,
    nextRoute: string, 
    backRoute?: string, // optional back route
};

const Button: React.FC<ButtonProps> = ({ sharedProgress, nextRoute, backRoute }) => {

    const router = useRouter();

    const handleNextButton = () => {
        if (nextRoute) {
            router.push(nextRoute);
        } else {
            console.error("nextRoute is undefined or invalid");
        }
    }

    const handleBackButton = () => {
        if (backRoute) {
            router.push(backRoute);
        } else {
            console.error("backRoute is undefined or invalid");
        }
    }

    return (
        <div className='bg-white h-24 flex items-center justify-items-center justify-between'>
            {
                sharedProgress > 25 ?
                    <button className='py-1 px-8 mx-8 bg-black text-white transition ease-in-out duration-300 rounded-md hover:bg-slate-300 hover:text-black focus:bg-slate-300 focus:text-black' onClick={handleBackButton}>
                        Back
                    </button> : 
                    <button className='pointer-events-none py-1 px-8 mx-8 bg-white text-white'>
                        Back
                    </button>
            }
            <button className='py-1 px-8 mx-8 bg-black text-white transition ease-in-out duration-300 rounded-md hover:bg-slate-300 hover:text-black focus:bg-slate-300 focus:text-black' onClick={handleNextButton}>
                Next
            </button>
        </div>
    );
}

export default Button;
