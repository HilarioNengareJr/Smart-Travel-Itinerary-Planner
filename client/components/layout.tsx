import React, { ReactNode } from "react";
import Header from './header';
import '../styles/layout.module.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-10">
            <Header />
            </header>
            <main className="container mx-auto">
                { children }
            </main>
        </>
    );
}

export default Layout;