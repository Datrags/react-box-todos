import {useState} from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
const TodoList = () => {
    
    const [todos, setTodos] = useState([]);
    const createTodo = todo => {
        setTodos(todos => [...todos, todo]);
        console.log(todos);
    }

    const removeTodo = message => {
        setTodos(todos => todos.filter(todo => todo != message))
    }

    const TodoComponents = todos.map( (todo, index) => (
        <Todo key={index+"todo"} todo={todo} removeTodo={removeTodo}/>
    )) 

    return (
        <div>
            <NewTodoForm createTodo={createTodo}/>
            {TodoComponents}
        </div>)
}

export default TodoList;