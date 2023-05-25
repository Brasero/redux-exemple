import DragonItem from "./DragonItem.jsx";

function DragonList({dragons, onRemove}) {

    return (
        <ul style={{
            listStyle: 'none'
        }}>
            {
                dragons.map(
                    (dragon, i) =>
                        <DragonItem
                            key={i}
                            onRemove={onRemove}
                            dragon={dragon}
                        />
                )
            }
        </ul>
    )
}

export default DragonList