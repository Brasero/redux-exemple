const buttonStyle = {
    transform: 'scale(0.6)',
    background: 'red'
}

const style = {
    minWidth: '150px',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between'
}

function DragonItem({dragon, onRemove}) {
    return (
        <li style={style}>
            <span>{dragon}</span>
            <button
                onClick={() => onRemove(dragon)}
                style={buttonStyle}
                role={'button'}
            >
                X
            </button>
        </li>
    )
}

export default DragonItem