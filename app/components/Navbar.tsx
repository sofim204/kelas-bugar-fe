import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                        <Image
                            className="rounded-full"
                            src="/logo.png"
                            alt="icon"
                            width={180}
                            height={38}
                            priority
                            />
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative ml-3">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link href="/" className="px-3 py-2 text-sm font-semibold text-black hover:underline" aria-current="page">Home</Link>
                                    <Link href="/about" className="px-3 py-2 text-sm font-semibold text-black hover:underline">About</Link>
                                    <Link href="/contact" className="px-3 py-2 text-sm font-semibold text-black hover:underline">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link href="/" className="block px-3 py-2 text-base font-semibold text-black hover:underline" aria-current="page">Home</Link>
                    <Link href="/about" className="block px-3 py-2 text-base font-semibold text-black hover:underline">About</Link>
                    <Link href="/contact" className="block px-3 py-2 text-base font-semibold text-black hover:underline">Contact Us</Link>
                </div>
            </div>
        </nav>
    )
}
