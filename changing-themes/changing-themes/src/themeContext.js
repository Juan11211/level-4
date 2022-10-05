import React, {useState} from "react"

const ThemeContext = React.createContext()

// creating a function 
function ThemeContextProvider(props){ 
    
    const [color, setColor] = useState("dark")

    const toggleTheme = () => { 
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    }

    return( 
        <ThemeContext.Provider value={{
            color: color,  
            toggleTheme: toggleTheme
          }} 
          > 
            {props.children}
          </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}