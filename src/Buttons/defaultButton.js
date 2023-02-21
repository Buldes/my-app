import React from "react";
import { defaultTextSytle } from "../Styles/TextStyles.js";

export function DefaultButton(props){

    const styleTypB = Object.assign({}, props.add, defaultTextSytle)

    return <button onClick={props.click} style={{
                    backgroundColor: props.color, borderColor: props.color, borderRadius:props.borderRadius,
                    width: props.width, height: props.height, 
                    top:props.top, left:props.left, position: "relative", 
                    fontSize:props.fontSize,
                    display: "flex", 
                    id:props.id, ...styleTypB}}>{props.name}</button>
}