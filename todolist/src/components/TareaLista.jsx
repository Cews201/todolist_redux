import React from "react";
import { useSelector } from "react-redux";
import Tarea from "./Tarea";


function TareaLista(){
    const tareas = useSelector((state)=> state.tareas )
    return(
        <>
            {
                tareas.map((tarea) =>(
                    <Tarea
                    key={tarea}
                    tarea={tarea}
                    />
                ))
            }
        </>
    )
}

export default TareaLista;