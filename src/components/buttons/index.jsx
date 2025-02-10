import React from "react"
import style from "./Index.module.css";

export const Button = ({tipo, nome}) => {
    return (
        <button type={tipo} className={style.btnOne}>{nome}</button>
    )
}