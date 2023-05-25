import AddDragon from "../component/AddDragon/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addDragon, removeDragon, reverseDragon} from "../store/actions/DragonActions.js";
import DragonHeader from "../component/DragonHeader/index.jsx";
import {DragonSelector} from "../store/selectors/DragonSelectors.js";
import DragonList from "../component/DragonList/index.jsx";
import KnightList from "../component/KnightList/index.jsx";
import {KnightSelector} from "../store/selectors/KnightSelectors.js";
import AddKnight from "../component/AddKnight/index.jsx";
import {addKnight, removeKnight, reverseKnight} from "../store/actions/KnightActions.js";
import CoupleComponent from "../component/CoupleComponent/index.jsx";
import {addCouple, removeCouple} from "../store/actions/CoupleActions.js";
import {CoupleSelector} from "../store/selectors/CoupleSelectors.js";

function DragonsPage() {
    const {knights} = useSelector(KnightSelector)
    const {couple, coupleMessage} = useSelector(CoupleSelector)
    const {dragons, count, message} = useSelector(DragonSelector)
    const dispatch = useDispatch()
    const onAddDragon = (name) => dispatch(addDragon(name))
    const onRemoveDragon = (name) => dispatch(removeDragon(name))
    const onReverseDragon = () => dispatch(reverseDragon())
    const onAddKnight = (name) => dispatch(addKnight(name))
    const onRemoveKnight = (name) => dispatch(removeKnight(name))
    const onReverseKnight = () => dispatch(reverseKnight())
    const onAddCouple = (couple) => dispatch(addCouple(couple))
    const onRemoveCouple = (couple) => dispatch(removeCouple(couple))

    return (
        <>
            <DragonHeader dragonQte={count} error={message} />
            <div style={{display: 'flex', gap: '10px'}}>
                <AddDragon onSubmit={onAddDragon} onReverse={onReverseDragon} />
                <DragonList dragons={dragons} onRemove={onRemoveDragon} />
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
                <AddKnight onAdd={onAddKnight} onReverse={onReverseKnight} />
                <KnightList knights={knights} onRemove={onRemoveKnight}/>
            </div>
            <CoupleComponent message={coupleMessage} couple={couple} dragons={dragons} knights={knights} onRemove={onRemoveCouple} addCouple={onAddCouple} style={{display: 'flex', gap: '10px'}} />
        </>
    )
}

export default DragonsPage