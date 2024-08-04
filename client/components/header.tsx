import React, { useEffect, useState } from 'react';
import ProgressBar from "./progressBar";

interface HeaderProps {
    sharedProgress: number
};

const Header: React.FC<HeaderProps> = ({sharedProgress}) => {

    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => { 
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    return (
        <header className={isActive ? 'bg-white shadow shadow-slate-300 pb-4 relative h-24 flex items-center justify-center' : 'bg-white pb-4 relative h-24 flex items-center justify-center'} >
            <div className='flex items-center'>
                <span className='material-symbols-outlined '>
                    location_on
                </span>
                <span className='text-xs font-thin'>
                    Powered by AI
                </span>
            </div>
            <div className='absolute bottom-0 left-0 right-0'>
                <ProgressBar sharedProgress={sharedProgress} />
            </div>
        </header>
    );
}

export default Header;
