import React from "react";
import { defaultTextSytle } from "../Styles/TextStyles";

export function DefaultLable(props){

    const styleTypL = Object.assign({}, props.add, defaultTextSytle)

    return <label style={...styleTypL} >props.text</label>
}