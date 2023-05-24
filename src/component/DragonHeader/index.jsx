
function DragonHeader({dragonQte, error}) {

    return (
        <header>
            <h1>Dragon List</h1>
            <h3>Nombre de dragon(s) : {dragonQte}</h3>
            {
                error && <span style={{color: 'red'}}>{error}</span>
            }
        </header>
    )
}

export default DragonHeader