"use client"
import { ThemeProvider } from 'next-themes'

export default function AerouiThemeProvider({children}) {
    return (
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={true}>
            {children}
        </ThemeProvider>
    )
}
