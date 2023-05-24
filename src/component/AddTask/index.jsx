import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTask} from "../../store/actions/TaskActions.js";

const inputStyle = {
    width: '100%',
    height: '30px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px',
    boxSizing: 'border-box',
    marginBottom: '10px',
    outline: 'none'
}

const AddTaskTemplate = ({onAdd}) => {
    const [newTask, setNewTask] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) =>
    {
        setLoading(true)
        e.preventDefault()
        await onAdd(newTask)
        setNewTask('')
        setLoading(false)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type={'text'}
                placeholder={"Nouvelle tache"}
                onChange={(e) => {setNewTask(e.target.value)}}
                value={newTask}
                style={inputStyle}
            />
            <button role={'submit'} disabled={loading}>Enregistrer</button>
        </form>
    )
}

function AddTask() {
    const dispatch = useDispatch()

    const onAdd = (value) => dispatch(addTask(value))

    return <AddTaskTemplate onAdd={onAdd} />
}

export default AddTask