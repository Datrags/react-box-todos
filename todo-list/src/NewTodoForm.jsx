import {useState} from 'react';

const NewTodoForm = ({createTodo}) => {
    const [formData, setFormData] = useState({
        todo: ""
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        createTodo(formData.todo)
        setFormData({ todo: ""})
        console.log("inside submit", {...formData});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">New Todo</label>
            <input id="todo" 
                type='text' 
                placeholder="Enter New Todo" 
                name="todo" value={formData.todo} 
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>)
}
export default NewTodoForm;