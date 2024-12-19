'use client'

import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <nav className="bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <Link href="/">
                                <Image
                                    className="w-auto h-auto"
                                    src="/logo.png"
                                    alt="icon"
                                    width={180}
                                    height={38}
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:block">
                        <div className="flex space-x-4">
                            <Link href="/" className="px-3 py-2 text-sm font-semibold text-black hover:underline" aria-current="page">Home</Link>
                            <Link href="/about" className="px-3 py-2 text-sm font-semibold text-black hover:underline">About</Link>
                            <Link href="/contact" className="px-3 py-2 text-sm font-semibold text-black hover:underline">Contact Us</Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Toggle navigation"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link href="/" className="block px-3 py-2 text-base font-semibold text-black hover:underline" aria-current="page">Home</Link>
                        <Link href="/about" className="block px-3 py-2 text-base font-semibold text-black hover:underline">About</Link>
                        <Link href="/contact" className="block px-3 py-2 text-base font-semibold text-black hover:underline">Contact Us</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
