
//Un selecteur permet de selectionner la "tranche" du store qui nous intéresse
export const TaskSelector = (state) => {
    return state.tasks
}

export const FiltredTaskSelector = (state) => {
    if(state.filter === null) {
        return state.tasks
    }
    return state.tasks.filter((task) => task.done === state.filter)
}