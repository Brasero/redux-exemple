import {NavLink} from 'react-router-dom';

const navStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: '20px',
}

const buttonsStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px'
}

function Nav() {
    const style = ({ isActive }) => {
        return {
            color: isActive ? 'red' : '#B5B5B5',
        }
    }

    return (
        <nav style={navStyle}>
            <div><h1>Redux App</h1></div>
            <div style={buttonsStyle}>
                <button>
                    <NavLink to={'/'} end style={style}>
                        Tasks
                    </NavLink>
                </button>
                <button>
                    <NavLink to={'/dragons'} style={style}>
                        Dragons
                    </NavLink>
                </button>
            </div>
        </nav>
    )
}
export default Nav