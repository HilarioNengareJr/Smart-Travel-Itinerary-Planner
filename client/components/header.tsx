import React from 'react';

const Header = () => {
    return (
        <header className='border-b-1 border-black'>
            <div className='flex flex-row flex-nowrap justify-center items-center py-5'>
                <span className='materials-symbol-outlined px-1'>
                    location_on
                </span>
                <span className='px-1'>
                    Powered by AI.
                </span>
            </div>
        </header>
    );
}

export default Header;