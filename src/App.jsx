import TasksPage from "./pages/TasksPage.jsx";
import './App.css'
import DragonsPage from "./pages/DragonsPage";
import {Routes, Route} from "react-router-dom";
import Nav from "./component/Nav/index.jsx";

const styledApp = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%'
}

function App() {

  return (
    <div style={styledApp}>
        <Nav />
        <Routes>
            <Route path={'/'} element={<TasksPage />} />
            <Route path={'/dragons'} element={<DragonsPage />} />
        </Routes>
    </div>
  )
}

export default App
