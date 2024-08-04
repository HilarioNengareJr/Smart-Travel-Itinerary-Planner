import React, { useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import Header from './header';
import Button from './button';
import '../styles/layout.module.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

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

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-10">
                <Header sharedProgress={progress} />
            </header>
            <main className="container mx-auto">
                {children}
            </main>
            <footer className="fixed bottom-0 left-0 right-0 z-10">
                <Button sharedProgress={progress} />
            </footer>
        </>
    );
}

export default Layout;