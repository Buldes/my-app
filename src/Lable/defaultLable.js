import React from "react";
import { defaultTextSytle } from "../Styles/TextStyles";

export function DefaultLable(props){

    const styleTypL = Object.assign({}, props.add, defaultTextSytle)

    return <label style={{
        width:props.width, height:props.height,
        top:props.top, left:props.left, position:"relative", 
        borderRadius:props.borderRadius, border:props.border, 
        fontSize:props.fontSize,
        backgroundColor:props.color,
        display:"flex", ...styleTypL}} >props.text</label>
}