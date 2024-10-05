import React, { useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import Header from './header';
import Button from './button';
import '../styles/layout.module.css';

interface LayoutProps {
    children: ReactNode;
    inputValue: string;
}

const Layout: React.FC<LayoutProps> = ({ children, inputValue }) => {

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
    }, [router.events]);

    useEffect(() => {
        const updateProgress = (newRoute: string) => {
            switch (newRoute) {
                case '/':
                    setProgress(25);
                    break;
                case '/dates':
                    setProgress(50);
                    break;
                case '/details':
                    setProgress(75);
                    break;
                default:
                    setProgress(100);
                    break;
            }
        };

        updateProgress(router.pathname);
    }, [router.pathname]);

    const getNextRoute = (currentRoute: string) => {
        switch (currentRoute) {
            case '/':
                return '/dates';
            case '/dates':
                return '/details';
            default:
                return null;
        }
    };

    const getBackRoute = (currentRoute: string) => {
        switch (currentRoute) {
            case '/dates':
                return '/';
            case '/details':
                return '/dates';
            default:
                return null;
        }
    };

    const nextRoute = getNextRoute(router.pathname);
    const backRoute = getBackRoute(router.pathname);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-10">
                <Header sharedProgress={progress} />
            </header>
            <main className="container mx-auto">
                {children}
            </main>
            <footer className="fixed bottom-0 left-0 right-0 z-10">
                <Button sharedProgress={progress} nextRoute={nextRoute} backRoute={backRoute} inputValue={inputValue} />
            </footer>
        </>
    );
}

export default Layout;
