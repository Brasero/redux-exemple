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

function ListItem({data, onRemove}) {
    return (
        <li style={style}>
            <span>{data}</span>
            <button
                onClick={() => onRemove(data)}
                style={buttonStyle}
                role={'button'}
            >
                X
            </button>
        </li>
    )
}

export default ListItem