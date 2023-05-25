import {useDispatch, useSelector} from "react-redux";
import {filterSelector} from "../../store/selectors/FilterSelectors.js";
import {ChangeFilter} from "../../store/actions/FilterActions.js";

const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px'
}

const FilterButtonsTemplate = ({filter, onChange}) => {
    return (
        <div style={buttonStyle}>
            <button disabled={filter === null} onClick={() => onChange(null)} >Tous</button>
            <button disabled={filter === true} onClick={() => onChange(true)}>Términée</button>
            <button disabled={filter === false} onClick={() => onChange(false)}>En cours</button>
        </div>
    )
}

function FilterButtons () {
    const filter = useSelector(filterSelector)
    const dispatch = useDispatch()
    const onFilterChange = (filter) => dispatch(ChangeFilter(filter))


    return <FilterButtonsTemplate filter={filter} onChange={onFilterChange} />
}

export default FilterButtons