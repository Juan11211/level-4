import React, {useContext} from "react"
import {ThemeContext} from "../themeContext"

function UglyThing(props) {
    const {
        editData,
        editOnChange,
        handleSaveChanges,
        handleEdit,
        handleDelete
    } = useContext(ThemeContext)
    const {id, title, imgUrl, description} = props

    return(
        <>
            <h2>{title}</h2>
            <img
                src={`${imgUrl}`}
                style={{
                    height: "200px",
                    width: "200px"
                }}
                alt={title}
            ></img>
            <p>{description}</p>
            {id === editData._id ?
            (<>
                <input
                    name="title"
                    value={editData.title}
                    onChange={editOnChange}
                ></input>
                <input
                    name="imgUrl"
                    value={editData.imgUrl}
                    onChange={editOnChange}
                ></input>
                <input
                    name="description"
                    value={editData.description}
                    onChange={editOnChange}
                ></input>
                <button onClick={e => handleSaveChanges(e, id)}>Save Changes</button>
            </>) :
            (<>
                <button onClick={e => handleEdit(e, id)}>Edit</button>
                <button onClick={e => handleDelete(e, id)}>Delete</button>
            </>)
            }
        </>
    )
}

export default UglyThing