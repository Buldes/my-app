import React from "react";
import { centering } from "../Styles/Look";
import { DefaultLable } from "./defaultLable";

export function BankBalanceLable(props){
    return <DefaultLable text={props.text + "€"} fontSize="60px" color="#3e3e3e" borderRadius="50%" height="300px" width="300px" add={centering}/>
}
        