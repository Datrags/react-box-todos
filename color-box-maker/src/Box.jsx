import React from "react";

const Box = ({color, width, height, remove, id}) => {
    const handleRemove = () => {
        console.log(id);
        remove(id);
        
    }

    return (
        <>
            <div style={{backgroundColor: color, width, height}}></div>
            <button onClick={handleRemove}>X</button>
        </>

    )
}

export default Box;