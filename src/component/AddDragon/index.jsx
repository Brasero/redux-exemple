import {useState} from "react";

function AddDragon({onSubmit, onReverse}) {
    const [dragon, setDragon] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(dragon)
        setDragon('')
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type={'text'}
                    placeholder={'Nom du dragon'}
                    value={dragon}
                    onChange={(e) => setDragon(e.target.value)}
                />
                <button role={'submit'}>Enregistrer</button>
            </form>
            <button role={"button"} onClick={() => onReverse()}>Inverser</button>
        </>
    )
}

export default AddDragon