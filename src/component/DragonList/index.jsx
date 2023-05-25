import ListItem from "./ListItem.jsx";

function DragonList({dragons, onRemove}) {

    return (
        <ul style={{
            listStyle: 'none'
        }}>
            {
                dragons.map(
                    (dragon, i) =>
                        <ListItem
                            key={i}
                            onRemove={onRemove}
                            data={dragon}
                        />
                )
            }
        </ul>
    )
}

export default DragonList