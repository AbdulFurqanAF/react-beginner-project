import React from "react"
import { useEffect,createContext,useContext, useState } from "react"



const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
e
}

export const ThemeProvider = ({ children }) => {

  const [isDarckMode, setIsDarckMode] = useState(false)


  const toggleTheme = () => {
    setIsDarckMode((prevMode) => !prevMode)
  }

  const theme = isDarckMode ? 'dark' : 'light'

  useEffect(() => {
    document.documentElement.setAttribute('web-theme' , theme)
   }, [isDarckMode])
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}