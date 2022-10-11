import { useState } from "react";
export const useForm = (formulario: any) => {
 
    const [formulario, setformulario] = useState({
        email: 'juramartinezmu@ittepic.edu.mx',
        password: '17401012'
    })
    const onChange = (value:string, campo:string) => {
        //FIC: llamado a la función que cambia el useState
        setformulario({
            //FIC: desestructuramos los valores del useState
            ...formulario,
            //FIC: aqui es como si estuvieramos mandando
            //el atributo email o password. Dicho de otro modo
            //los [] computan es decir compara el valor que trae
            //el parametro "campo" y lo relaciona con el valor del
            //useState. Por ultimo si encontro un atributo que se llame
            //igual le asigna el valor que trae el parametro "value"
            //de la funcion onChange.
            [campo]: value
        });
    }
    return {
        ...state,
        formulario: state,
        onChange
    }
}