const buttonStyle = {
    transform: 'scale(0.6)',
    background: 'red'
}

function DragonItem({dragon, onRemove}) {
    return (
        <li>
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