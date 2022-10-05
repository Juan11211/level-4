import React, {useContext} from 'react';
import {ThemeContext} from "./themeContext"

function Header(props) {
    
    const {color} = useContext(ThemeContext)
    
    return (
        <div className={`${color}-theme`}>
            <nav className='nav--bar'> 
                    <h3>Home</h3>
                    <h3>Contact Us</h3>
                    <h3>Locations</h3>
            </nav>
        </div>
    );
}

export default Header;