'use client'

import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Após o componente ser montado, atualizamos o estado para evitar renderização do lado do servidor
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-8 h-8" />
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            aria-label="Alternar tema"
        >
            {theme === 'dark' ? (
                <FiSun className="text-yellow-400" size={20} />
            ) : (
                <FiMoon className="text-gray-700" size={20} />
            )}
        </button>
    )
}

export default ThemeToggle 