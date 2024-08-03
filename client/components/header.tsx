import React, {useEffect, useState} from 'react';
import ProgressBar from "./progressBar";

const Header: React.FC = () => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if(window.scrollY > 100){
                setIsActive(!isActive);
        }else{
            setIsActive(!isActive);
        }
    },[])

    return (
        <header className='bg-white shadow-none hover:shadow-sm pb-4 relative h-24 flex items-center justify-center'>
            <div className='flex items-center'>
                <span className='material-symbols-outlined '>
                    location_on
                </span>
                <span className='text-xs font-thin'>
                    Powered by AI
                </span>
            </div>
            <div className='absolute bottom-0 left-0 right-0'>
                <ProgressBar />
            </div>
        </header>
    );
}

export default Header;
