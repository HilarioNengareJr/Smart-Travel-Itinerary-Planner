import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';

const PogressBar: React.FC = () => {

    const [progress, setProgress] = useState(0);
    const router = useRouter();

    useEffect(()=>{
        const handleStart = () => setProgress(30);
        const handleComplete = () => setProgress(100);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
    },[])
    return(
        
    );

}

