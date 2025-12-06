import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="glass-panel sticky top-0 z-10">
                <div className="container flex justify-between items-center" style={{ height: '70px' }}>
                    <h1 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                        Family Accounting
                    </h1>
                    <nav className="flex gap-md">
                        <button className="btn btn-primary">Dashboard</button>
                        <button className="btn">Settings</button>
                    </nav>
                </div>
            </header>

            <main className="container flex-grow mt-lg pb-xl">
                {children}
            </main>
        </div>
    );
};

export default Layout;
