import React, {useState} from "react"                                                                                                                 
import Header from './Header';
import Button from './Button'
import Footer from './Footer'
import {ThemeContextProvider} from "./themeContext"

function App(props) {

    
    return (
        <>
            <ThemeContextProvider>
                <Header/>
                <Button />
                <Footer />
            </ThemeContextProvider>
        </>
    );
}

export default App;