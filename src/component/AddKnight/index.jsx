import {useState} from "react";

function AddKnight({onAdd, onReverse}) {

    const [knight, setKnight] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onAdd(knight)
        setKnight('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type={'text'}
                    placeholder={'Nom du chevalier'}
                    value={knight}
                    onChange={(e) => setKnight(e.target.value)}
                />
                <button role={'submit'}>Enregistrer</button>
            </form>
            <button role={"button"} onClick={() => onReverse()}>Inverser</button>
        </div>
    )
}

export default AddKnight