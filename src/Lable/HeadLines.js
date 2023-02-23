import React from "react";
import { centering } from "../Styles/Look";
import { DefaultLable } from "./defaultLable";

export function Headline(props){
    return <DefaultLable fontSize="25px" text={props.text} top={props.top} left={props.left} color="#5e5e5e" width={props.width} borderRadius="20px" add={Object.assign({}, centering, props.add)}/>
}