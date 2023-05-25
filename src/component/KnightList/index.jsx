import ListItem from "../DragonList/ListItem.jsx";

function KnightList({knights, onRemove}) {

    return (
        <ul style={{
            listStyle: 'none'
        }}>
            {
                knights.length > 0 ?
                    knights.map((knight, i) => <ListItem key={i} data={knight} onRemove={onRemove} /> )
                    :
                    <li>Aucun chevalier</li>
            }
        </ul>
    )
}

export default KnightList