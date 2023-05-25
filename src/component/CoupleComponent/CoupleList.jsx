function CoupleList({couple, onRemove}) {

    return (
        <ul style={{listStyle: 'none'}}>
            <li>Liste de couple</li>
            {
                couple.length > 0 ?
                    couple.map((obj, i) => {
                        return (
                            <li key={i}>
                                {obj.dragon} / {obj.knight}
                                <button
                                    style={{
                                        background: 'red',
                                        transform: 'scale(0.6)'
                                    }}
                                    onClick={() => onRemove(obj)}
                                >
                                    X
                                </button>
                            </li>
                        )
                    })
                    :
                    <li>Aucune association</li>
            }
        </ul>
    )
}

export default CoupleList