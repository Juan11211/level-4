import React, {useContext} from "react"
import { ThemeContext } from "./themeContext" 

// creating a button function // addimg props bc its a react children. 
function Button(props){

    const {color, toggleTheme} = useContext(ThemeContext)
        return ( 
            <div className="button">
            <button onClick ={toggleTheme} className={`{color}-theme`}>Change Theme</button>
            </div>
        )
}
    
export default Button;