import React from "react";
import { centering } from "../Styles/Look";
import { DefaultLable } from "./defaultLable";

export function ListLable(props){
    var bgColor = "#5e5e5e"
    if (props.text === "Ausgaben"){
        bgColor = "#ef2f2f"
    }

    if (props.text === "Einkommen"){
        bgColor = "#2f9f1f"
    }

    return <DefaultLable text={props.text} borderRadius="3px" fontSize="22px" top={props.top} left={props.left} width={props.width} id={props.id} color={bgColor} add={centering}/>
}