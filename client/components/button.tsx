import React from 'react';

interface ButtonProps {
    sharedProgress: number
};

const Button: React.FC<ButtonProps> = ({ sharedProgress }) => {
    console.log('progres: ', sharedProgress);
    return (
        <div className='bg-white h-24 flex items-center justify-items-center justify-between'>
            {
                sharedProgress > 25 ?
                    <button className='py-1 px-8 mx-8 bg-black text-white transition ease-in-out duration-300 rounded-md hover:bg-slate-300 hover:text-black focus:bg-slate-300 focus:text-black'>
                        Back
                    </button> : 
                    <button className='pointer-events-none py-1 px-8 mx-8 bg-white text-white'>
                        Back
                    </button>
            }
            <button className='py-1 px-8 mx-8 bg-black text-white transition ease-in-out duration-300 rounded-md hover:bg-slate-300 hover:text-black focus:bg-slate-300 focus:text-black'>
                Next
            </button>
        </div>
    );
}

export default Button;
