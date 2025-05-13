import './Layout.css';
import type { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

function Layout({children}: LayoutProps) {
    return (
        <div className='layout'>
            <main className='main-content'>{children}</main>
        </div>
    );
}

export default Layout;