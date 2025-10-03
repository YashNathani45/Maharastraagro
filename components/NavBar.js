'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

    return (
        <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <Image
                            src="/logo.png"
                            alt="Maharashtra Agro Equipments Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <div className="text-xl sm:text-2xl font-bold text-[#339d9e]">
                            Maharashtra Agro Equipments
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-6 md:gap-8">
                        <Link href="/" className="text-[#339d9e] hover:text-[#2b8a8b] font-medium transition-colors">Home</Link>
                        <Link href="/about" className="text-[#339d9e] hover:text-[#2b8a8b] font-medium transition-colors">About Us</Link>
                        <Link href="/products" className="text-[#339d9e] hover:text-[#2b8a8b] font-medium transition-colors">Products</Link>
                        <Link href="/become-dealer" className="text-[#339d9e] hover:text-[#2b8a8b] font-medium transition-colors">Become a Dealer</Link>
                    </div>

                    <button
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((v) => !v)}
                        className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-[#339d9e] hover:text-[#2b8a8b] hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#339d9e]"
                    >
                        {isOpen ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile menu */}
                <div className={`${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} sm:hidden grid transition-all duration-300`}>
                    <div className="overflow-hidden">
                        <div className="pt-3 pb-2 flex flex-col gap-2">
                            <Link href="/" onClick={closeMenu} className="px-2 py-2 rounded-md text-[#339d9e] hover:text-[#2b8a8b] hover:bg-gray-50 font-medium transition-colors">Home</Link>
                            <Link href="/about" onClick={closeMenu} className="px-2 py-2 rounded-md text-[#339d9e] hover:text-[#2b8a8b] hover:bg-gray-50 font-medium transition-colors">About Us</Link>
                            <Link href="/products" onClick={closeMenu} className="px-2 py-2 rounded-md text-[#339d9e] hover:text-[#2b8a8b] hover:bg-gray-50 font-medium transition-colors">Products</Link>
                            <Link href="/become-dealer" onClick={closeMenu} className="px-2 py-2 rounded-md text-[#339d9e] hover:text-[#2b8a8b] hover:bg-gray-50 font-medium transition-colors">Become a Dealer</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar


