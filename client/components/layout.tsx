import React, { ReactNode } from "react";
import Header from './header';
import ProgressBar from "./progressBar";
import '../styles/layout.module.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <ProgressBar />
            {/* main content area */}
            <div className="content">
                { children }
            </div>
        </>
    );
}

export default Layout;