import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useRouteProgress = (): number => {
    const [progress, setProgress] = useState<number>(25);
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => setProgress(25);
        const handleComplete = () => setProgress(100);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        }
    }, []);

    return progress;
};
