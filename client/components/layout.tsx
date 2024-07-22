import React, { ReactNode } from "react";
import Header from './header';
import '../styles/layout.module.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />

            {/* main content area */}
            <div className="content">
                { children }
            </div>
        </>
    );
}

export default Layout;