import React from 'react';

const Header: React.FC = () => {
    return (
        <header className='border-b border-gray-300 h-24 flex items-center justify-center'>
            <div className='flex items-center text-sm font-thin'>
                <span className='material-symbols-outlined'>
                    location_on
                </span>
                <span>
                    Powered by AI
                </span>
            </div>
        </header>
    );
}

export default Header;
