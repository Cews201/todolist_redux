import React, {useState} from "react";
import { useDispatch } from "react-redux";


function Tarea({tarea}){

    const [editando, setEditando] = useState(false);
    const [tareaEditada, setTareaEditada] = useState(tarea);
    const dispatch = useDispatch()
    const actualizarTareaEditada = (e) => {
        setTareaEditada(e.target.value);}

    function editarTarea(){
        if(editando){
            if(tareaEditada.trim())
                dispatch({
                    type: 'EDITAR',
                    payload: {
                        tareaAnterior: tarea,
                        tareaEditada: tareaEditada
                    }
                })
        }
        setEditando(!editando)
    }
    const textoTarea = <span>{tarea}</span>;
    const inputTareaEditada = <input type='text' value={tareaEditada} onChange={actualizarTareaEditada} />;

    return(
        <div className='tarea-1'>
            {
                editando ? inputTareaEditada : textoTarea
            }
            <button onClick={editarTarea} className="button-3">
                {
                    editando ? 'Guardar' : 'Editar'
                }                
            </button>
            <button onClick={() => dispatch({
                type:'ELIMINAR',
                payload: tarea
            })} className='button-2'>
                Eliminar
            </button>
        </div>
    );
}
export default Tarea;
    