import React, {useState} from "react"
import axios from "axios"

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const dataDefault = {
        title: "",
        imgUrl: "",
        description: ""
    }
    // storing data in the state 
    const [data, setData] = useState({...dataDefault})
    // list state 
    const [list, setList] = useState([])
    // edit state 
    const [editData, setEditData] = useState({...dataDefault})
    // change function 
    const handleChange = e => {
        const {name, value} = e.target
        setData(prevData => ({...prevData, [name]: value}))
    }
    // submit function 
    const handleSubmit = e => {
        e.preventDefault()
        axios.post("https://api.vschool.io/juanaviles/thing",{...data})
            .then(res => {
                console.log(res.data)
                getData()
                // insted of caling getData, just call setList and add the new item (res.data)
            })
            .catch(err => console.log(err))
        setData({...dataDefault})
    }
    // delete function 
    const handleDelete = (e, thingID) => {
        console.log(e)
        console.log(thingID)
        axios.delete(`https://api.vschool.io/juanaviles/thing/${thingID}`)
            .then(res => {
                console.log("deleted" + res.data)
                getData()

                // alternative approach: 
                // filter through the list and ifthe id of the item matches thingID, you can exclude it from the list
            })
            .catch(err => "oops, delete is not working..." + err)
    }
    // edit function 
    const handleEdit = (e, thingID) => {
        console.log(e)
        console.log(thingID)
        axios.get(`https://api.vschool.io/juanaviles/thing/${thingID}`)
            .then(res => setEditData({...res.data}))
            .catch(err => console.log("edit not working" + err))
    }
    // edit changes 
    const editOnChange = e => {
        const {name, value} = e.target
        setEditData(prevEditData => ({...prevEditData, [name]: value}))
    }
    // save edit changes 
    const handleSaveChanges = (e, thingID) => {
        console.log(e)
        console.log(thingID)
        axios.put(`https://api.vschool.io/juanaviles/thing/${thingID}`, editData)
            .then(res => {
                getData()
                console.log(res.data)
                setEditData({...dataDefault})
            })
            .catch(err => "savechange not working" + err)
    }
    // getting api and saving it to list state
    const getData = () => {
        axios.get("https://api.vschool.io/juanaviles/thing")
            .then(res => setList(res.data))
            .catch(err => console.log("oops..." + err))
        console.log("getting data")
    }
    // passing themeContext and passing in all the states/functions in the value
    return(
        <ThemeContext.Provider
            value={{
                data,
                list,
                editData,
                getData,
                handleChange,
                handleSubmit,
                handleDelete,
                handleEdit,
                editOnChange,
                handleSaveChanges
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}