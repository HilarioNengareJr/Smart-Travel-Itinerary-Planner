import React, { ReactNode, useState } from "react";
import { useRouter } from "next/router";
import Header from './header';
import Button from './button';
import '../styles/layout.module.css';
import { useRouteProgress } from './useRouteProgress';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const progress = useRouteProgress();

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
