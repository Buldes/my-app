import React from "react";
import { bgColor2e } from "../Styles/backGroundColor";
import { ListLable } from "../Lable/listLable";
import { DeleteButton } from "../Buttons/deletButton";

export function CostIncommListItem(props){
    return (
        <div key={props.key} style={{margin: "5px 0", height: 35, width: 580, borderRadius: "5px", backgroundColor:bgColor2e, display: 'flex', position: "relative", top: props.y, left:props.x, alignItems: "center"}} >
          
          <ListLable text={props.the_state} id={props.the_id} width="150px" left="5px"/>

          <ListLable text={props.the_date} id={props.the_id} width="180px" left="10px"/>

          <ListLable text={props.the_amount + "€"} id={props.the_id} width="200px" left="15px"/>

          <DeleteButton left="20px"/>

        </div>)}