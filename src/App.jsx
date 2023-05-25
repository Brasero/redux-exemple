import TasksPage from "./pages/TasksPage.jsx";
import './App.css'
import DragonsPage from "./pages/DragonsPage";
import {Routes, Route} from "react-router-dom";
import Nav from "./component/Nav/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {LogSelector} from "./store/selectors/LogSelectors.js";
import {purgeLog} from "./store/actions/LogActions.js";

const styledApp = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%'
}

function App() {

    const dispatch = useDispatch()
    const {logs} = useSelector(LogSelector)

    const purge = () => dispatch(purgeLog())

  return (
    <div style={styledApp}>
        <ul>
        {
            logs.length > 0 ?

                logs.map((log, i) => <li key={i}>Action : {log.action}, name: {log.name}, nb dragons: {log.count}</li>)
                 :
                <li>Aucune action n'a été effectuée</li>
        }
        </ul>
        <button onClick={purge} disabled={logs.length === 0}>Purger les logs</button>
        <Nav />
        <Routes>
            <Route path={'/'} element={<TasksPage />} />
            <Route path={'/dragons'} element={<DragonsPage />} />
        </Routes>
    </div>
  )
}

export default App
