"use client"
import Button from './aeroui/button'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme()

    return (
        <>
            <Button variant="outline" size='icon' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {
                    theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
                }
            </Button>
        </>
    )
}