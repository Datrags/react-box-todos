import React from "react";

const Todo = ({todo, removeTodo}) => {

    const handleRemove = () => {
        removeTodo(todo);
    }
    return (<div> {todo} <button onClick={handleRemove}>x</button></div>)
}

export default Todo;