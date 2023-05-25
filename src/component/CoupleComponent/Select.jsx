function Select({label, name, value, onSelect, data}) {

    return (
        <label htmlFor={label}>
            {
                data.length > 0 ?
                    <>
                        {label}
                        <select id={label} name={name} value={value} onChange={onSelect}>
                            <option value={''}>Aucun</option>
                            {
                                data.map((item, i) => <option key={i} value={item}>{item}</option>)
                            }
                        </select>
                    </>
                :
                (`Aucun ${label} à séléctionner`)

            }
        </label>
    )
}

export default Select