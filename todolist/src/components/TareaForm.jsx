import React, {useState} from "react"
import {useSelector, useDispatch} from 'react-redux'



function TareaForm(){
    const [tarea, setTarea] = useState('')
    const dispatch= useDispatch();

    function agregarTarea(e){
       
        e.preventDefault()
        dispatch({type: 'AGREGAR',payload: tarea})
        setTarea('')
        }
    
    return(
        <div  className='container'>
            <form onSubmit={agregarTarea }>
                <input 
                    onChange={(e) => setTarea(e.target.value)} 
                    type="text"
                    placeholder="Agregar tarea"
                    value={tarea}/>
                <button type="submit" >
                    Agregar Tarea
                </button>
            </form>
        </div>
    )
}


export default TareaForm;