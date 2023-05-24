import AddDragon from "../component/AddDragon/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addDragon, removeDragon, reverseDragon} from "../store/actions/DragonActions.js";
import DragonHeader from "../component/DragonHeader/index.jsx";
import {DragonSelector} from "../store/selectors/DragonSelectors.js";
import DragonList from "../component/DragonList/index.jsx";

function DragonsPage() {
    const {dragons, count, message} = useSelector(DragonSelector)
    const dispatch = useDispatch()
    const onAddDragon = (name) => dispatch(addDragon(name))
    const onRemoveDragon = (name) => dispatch(removeDragon(name))
    const onReverseDragon = () => dispatch(reverseDragon())

    return (
        <>
            <DragonHeader dragonQte={count} error={message} />
            <AddDragon onSubmit={onAddDragon} onReverse={onReverseDragon} />
            <DragonList dragons={dragons} onRemove={onRemoveDragon} />
        </>
    )
}

export default DragonsPage