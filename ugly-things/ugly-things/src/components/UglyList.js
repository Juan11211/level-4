import React, {useContext, useEffect} from "react"
import {ThemeContext} from "../themeContext"

import UglyThing from "./UglyThing"

function UglyList() {
    const {list, getData} = useContext(ThemeContext)

    useEffect(() => {
        getData()
    }, [])

    const renderUglyList = list.map(thing => (
        <UglyThing
            key={thing._id}
            id={thing._id}
            title={thing.title}
            imgUrl={thing.imgUrl}
            description={thing.description}
        />
    ))
    
    return(
        <div className="list-container">
            <ul>
                {renderUglyList}
            </ul>
        </div>
    )
}

export default UglyList