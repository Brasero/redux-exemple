import TaskList from "./component/TaskList/index.jsx";
import FilterButtons from "./component/FilterButtons/index.jsx";
import AddTask from "./component/AddTask/index.jsx";
import './App.css'

function App() {

  return (
    <>
        <FilterButtons />
        <TaskList/>
        <AddTask />
    </>
  )
}

export default App
