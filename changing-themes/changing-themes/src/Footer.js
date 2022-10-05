import React, {useContext} from "react"
import { ThemeContext } from "./themeContext" 

function Footer(props){ 
   
    const {color} = useContext(ThemeContext)

    return( 
        <div className="footer">
        <div className={`${color}-theme`}>
        <h3>This amazing footer!</h3>
        </div>
        </div>
    )
}

export default Footer;