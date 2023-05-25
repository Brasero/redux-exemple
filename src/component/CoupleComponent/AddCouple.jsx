import {useState} from "react";
import Select from "./Select.jsx";

function AddCouple({dragons, knights, addCouple}) {

    const [couple, setCouple] = useState({
        knight: '',
        dragon: ''
    })

    const handleChange = (e) => {
        const {value, name} = e.target
        const state = {...couple, [name]: value}
        setCouple(state)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(couple)
        addCouple(couple)
        setCouple({
            knight: '',
            dragon: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Select
                name={'dragon'}
                value={couple.dragon}
                onSelect={handleChange}
                label={'Dragon'}
                data={dragons}
            />
            <Select
                name={'knight'}
                value={couple.knight}
                onSelect={handleChange}
                label={'Chevalier'}
                data={knights}
            />
            <button>Associer</button>
        </form>
    )
}

export default AddCouple