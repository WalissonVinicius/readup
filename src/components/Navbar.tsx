'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { BiBook } from 'react-icons/bi'
import ThemeToggle from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <BiBook className="h-6 w-6 text-primary" />
                            <span className="ml-2 font-semibold">Light Novels</span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/chapters"
                            className={`px-3 py-2 rounded-md text-sm font-medium ${pathname.startsWith('/chapters') && !pathname.includes('hidden-lines')
                                ? 'text-primary'
                                : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                                }`}
                        >
                            光と闇の間
                        </Link>
                        <Link
                            href="/chapters/hidden-lines"
                            className={`px-3 py-2 rounded-md text-sm font-medium ${pathname.includes('hidden-lines')
                                ? 'text-primary'
                                : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                                }`}
                        >
                            Hidden Lines
                        </Link>
                        <ThemeToggle />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <ThemeToggle />
                        <button
                            onClick={toggleMenu}
                            className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-400 hover:text-black hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-800 focus:outline-none"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                href="/chapters"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 flex items-center"
                                onClick={() => setIsOpen(false)}
                            >
                                <BiBook className="mr-2" />
                                光と闇の間
                            </Link>
                            <Link
                                href="/chapters/hidden-lines"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 flex items-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Hidden Lines
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar 