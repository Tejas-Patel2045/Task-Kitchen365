'use client';

import { ReactNode, useState } from 'react';

interface SidebarLayoutProps {
    children: ReactNode;
    sidebar: ReactNode;
    sidebarWidth?: string;
    className?: string;
}

export default function SidebarLayout({
    children,
    sidebar,
    sidebarWidth = '64',
    className = '',
}: SidebarLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`flex h-full ${className}`}>
            {/* Sidebar for desktop */}
            <div className={`hidden md:block w-${sidebarWidth} flex-shrink-0 border-r border-gray-200`}>
                {sidebar}
            </div>

            {/* Mobile sidebar (overlay) */}
            {isSidebarOpen && (
                <div className="md:hidden fixed inset-0 z-40 flex">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
                        onClick={toggleSidebar}
                    ></div>

                    {/* Sidebar panel */}
                    <div className={`relative flex-1 flex flex-col max-w-xs w-full bg-white`}>
                        {/* Close button */}
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button
                                type="button"
                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={toggleSidebar}
                            >
                                <span className="sr-only">Close sidebar</span>
                                <svg
                                    className="h-6 w-6 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Sidebar content */}
                        <div className="h-full overflow-y-auto">{sidebar}</div>
                    </div>

                    <div className="flex-shrink-0 w-14">
                        {/* Force sidebar to shrink to fit close icon */}
                    </div>
                </div>
            )}

            {/* Main content */}
            <div className="flex-1 min-w-0 flex flex-col">
                {/* Mobile top bar with menu button */}
                <div className="md:hidden flex items-center px-4 h-16 bg-white border-b border-gray-200">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        onClick={toggleSidebar}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <div className="ml-4 text-lg font-medium">Menu</div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-auto">{children}</div>
            </div>
        </div>
    );
}