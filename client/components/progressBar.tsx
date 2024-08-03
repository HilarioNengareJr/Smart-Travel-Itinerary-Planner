import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ProgressBar: React.FC = () => {
    const [progress, setProgress] = useState<number>(30);
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => setProgress(30);
        const handleComplete = () => setProgress(100);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);

    return (
        <div className='border-t border-gray-300 w-full h-3'>
            <div className='bg-gray-300 h-3' style={{ width: `${progress}%`}}>
               
            </div>
        </div>
    );
};

export default ProgressBar;
