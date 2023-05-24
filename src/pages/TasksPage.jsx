import FilterButtons from "../component/FilterButtons/index.jsx";
import TaskList from "../component/TaskList/index.jsx";
import AddTask from "../component/AddTask/index.jsx";

function TasksPage() {

    return (
        <div>
            <FilterButtons />
            <TaskList />
            <AddTask />
        </div>
    )
}
export default TasksPage