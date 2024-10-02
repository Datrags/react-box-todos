import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";

const NewBoxForm = ({createBox}) => {

    const [formData, setFormData] = useState({
        height: "100px",
        width: "100px",
        color: "#000"
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData)
        createBox({ ...formData, id: uuidv4()});
        setFormData({
            height: "100px", 
            width: "100px", 
            color: "#000" 
        });
    }


    return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="height">Height</label>
            <input id="height" type="text" placeholder="Height" name="height" value={formData.height} onChange={handleChange}/><br/>
            <label htmlFor="width">Width</label>
            <input id="width" type="text" placeholder="Width" name="width" value={formData.width} onChange={handleChange}/><br/>
            <label htmlFor="color">Color</label>
            <input id="color" type="text" placeholder="Color" name="color" value={formData.color} onChange={handleChange}/><br/>
            <button>Create New Box</button>
        </form>
    </>
        
    )
}

export default NewBoxForm;