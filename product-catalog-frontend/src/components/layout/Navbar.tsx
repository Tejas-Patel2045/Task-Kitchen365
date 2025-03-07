'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { isAuthenticated, logout, user, isLoading } = useAuth();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleLogout = async () => {
        await logout();
        closeMobileMenu();
    };

    const isActive = (path: string) => {
        return pathname === path;
    };

    const navLinkClasses = 'px-3 py-2 rounded-md text-sm font-medium';
    const activeClasses = 'bg-blue-100 text-blue-700';
    const inactiveClasses = 'text-gray-700 hover:bg-gray-100';

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center" onClick={closeMobileMenu}>
                            <span className="text-blue-600 font-bold text-xl">ProductCatalog</span>
                        </Link>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-2">
                            <Link href="/" className={`${navLinkClasses} ${isActive('/') ? activeClasses : inactiveClasses}`}>
                                Home
                            </Link>
                            {isAuthenticated && (
                                <Link href="/products" className={`${navLinkClasses} ${isActive('/products') ? activeClasses : inactiveClasses}`}>
                                    Products
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        {isLoading ? (
                            <div className="h-5 w-5 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
                        ) : isAuthenticated ? (
                            <div className="flex items-center">
                                <span className="text-gray-700 mr-4">Hi, {user?.name || 'User'}</span>
                                <button
                                    onClick={handleLogout}
                                    className="bg-white text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex space-x-2">
                                <Link
                                    href="/login"
                                    className={`${navLinkClasses} ${isActive('/login') ? activeClasses : inactiveClasses}`}
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className={`bg-blue-600 text-white hover:bg-blue-700 ${navLinkClasses}`}
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMobileMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link
                            href="/"
                            className={`block ${navLinkClasses} ${isActive('/') ? activeClasses : inactiveClasses}`}
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                        {isAuthenticated && (
                            <Link
                                href="/products"
                                className={`block ${navLinkClasses} ${isActive('/products') ? activeClasses : inactiveClasses}`}
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        )}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        {isLoading ? (
                            <div className="flex justify-center py-2">
                                <div className="h-5 w-5 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
                            </div>
                        ) : isAuthenticated ? (
                            <div className="space-y-1">
                                <div className="px-4 py-2 text-gray-700">Hi, {user?.name || 'User'}</div>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-1">
                                <Link
                                    href="/login"
                                    className={`block ${navLinkClasses} ${isActive('/login') ? activeClasses : inactiveClasses}`}
                                    onClick={closeMobileMenu}
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className={`block ${navLinkClasses} bg-blue-600 text-white hover:bg-blue-700`}
                                    onClick={closeMobileMenu}
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}