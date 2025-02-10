import React from "react"
import style from "./Index.module.css";

export const Input = ({ changeValueState, tipo, placeholder }) => {

    const changeValue = (ev) => {
        const valor = ev.target.value;

        changeValueState(valor.replace(",","."));
    }

    return (
        <input 
        className={style.inpOne} 
        type={tipo} 
        placeholder={placeholder}
        onChange={changeValue}
        />
    )
}