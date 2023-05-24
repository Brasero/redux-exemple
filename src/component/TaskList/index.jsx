//import {connect} from "react-redux";
import {FiltredTaskSelector, TaskSelector} from "../../store/selectors/TaskSelectors.js";
import {removeTask, toggleTask} from "../../store/actions/TaskActions.js";
import {useDispatch, useSelector} from "react-redux";

const trashStyle = {
    transform: 'scale(0.6)',
    background: 'red',
    fontSize: '1.1rem'
}

const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    listDecoration: 'none'
}

const labelStyle = (done) => {
    return {
        textDecoration: done ? 'line-through' : 'none',
        color: done ? '#B5B5B5' : '#fff'
    }
}

const TaskItem = ({task, onToggle, onDelete}) => {
    return <li style={itemStyle}>
            <input type={'checkbox'} id={`input-${task.id}`} onChange={() => onToggle(task)} checked={task.done}/>
            <label htmlFor={`input-${task.id}`} style={labelStyle(task.done)}>{task.task}</label>
            <button style={trashStyle} onClick={() => {onDelete(task)}}>X</button>
            </li>
}

const TaskTemplate = ({task, onToggle, onDelete}) => {
    return <ul>{
        task.map((t) => <TaskItem key={t.id} task={t} onDelete={onDelete} onToggle={onToggle} /> )
    }</ul>
}


//Composant pur React décorer par le HOC TaskStore
function TaskList() {

    const task = useSelector(FiltredTaskSelector)
    const dispatch = useDispatch()
    const onToggle = (task) => dispatch(toggleTask(task))
    const onDelete = (task) => dispatch(removeTask(task))

    return <TaskTemplate task={task} onToggle={onToggle} onDelete={onDelete}/>
}

//TaskStore permet de mapper les state et les methode de dispatch en props
//Pour notre component pur en React
/*
const TaskStore = connect(
    state => ({
        task: TaskSelector(state)
    }),
    (dispatch) => ({
        onToggle: (task) => dispatch(toggleTask(task))
    })
)(TaskList)

export default TaskStore
*/
export default TaskList