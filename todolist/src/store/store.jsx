import {configureStore} from '@reduxjs/toolkit'

const InitialState={
    tareas:[],
}

function TareaReducer(state=InitialState, action){
    switch(action.type){
        case 'AGREGAR':
            return{...state, tareas: [...state.tareas, action.payload]}

        case 'EDITAR':
            return{...state, tareas: state.tareas.map((tarea)=> tarea === action.payload.tareaAnterior ? action.payload.tareaEditada : tarea)}

        case 'ELIMINAR':
            return{...state, tareas: state.tareas.filter((t) => t !== action.payload)}

        default:
            return state;
    }
}
const store= configureStore({
    reducer: TareaReducer
})

export default store;