import { useState } from "react"
import ThemeContext from "./ThemeContext"

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({children}) => {

    const [theme , setTheme] =useState('white');

    const toggle =()=>{
        setTheme('dark');
    }
  return (
    <ThemeContext.Provider value={{theme,setTheme,toggle}}>

        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
