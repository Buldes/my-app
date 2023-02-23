import React from "react";
import { centering } from "../Styles/Look.js";
import { DefaultButton } from "./defaultButton.js";

export function AddButton(props){
    return <DefaultButton name="+" color="#2f9f1f" click={props.click} borderRadius="10px" width="35px" height="35px" top={props.top} left={props.left} fontSize="20px" add={centering}/>
} 

export function DeleteButton(props){
    return <DefaultButton name="X" color="#ff1f1f" borderRadius="3px" width="25px" height="25px" top={props.top} left={props.left} id={props.id} add={Object.assign({}, centering,  {color:"black"})}/>
}