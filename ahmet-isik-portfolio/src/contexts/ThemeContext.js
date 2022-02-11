import React, { createContext, useState } from 'react'

import { themeDarkData, themeData } from '../data/themeData'
import { blueThemeLight } from '../theme/theme'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(themeData.theme)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const setHandleTheme = () => {
        if (theme === blueThemeLight)
            setTheme(themeDarkData.theme);
        else
            setTheme(themeData.theme);
    }

    const value = { theme, drawerOpen, setHandleDrawer, setHandleTheme }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider