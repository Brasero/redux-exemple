import AddCouple from "./AddCouple.jsx";
import CoupleList from "./CoupleList.jsx";

function CoupleComponent({style, dragons, knights, addCouple, onRemove, couple, message}) {

    return (
        <div style={style}>
            {message && <span style={{color: 'red'}}>{message}</span> }
            <AddCouple dragons={dragons} knights={knights} addCouple={addCouple} />
            <CoupleList couple={couple} onRemove={onRemove} />
        </div>
    )
}


export default CoupleComponent