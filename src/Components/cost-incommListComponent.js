import React from "react";
import { Headline } from "../Lable/HeadLines";
import { bgColor3e, bgColor4e } from "../Styles/backGroundColor";
import { StatusDropBox } from "../DropBox/statusDropBox";
import { AddButton } from "../Buttons/addButton";
import { AmoutInput } from "../InputField/amoutInputField";

export function CostIncommListComponent(props){
    const {headlineWidth=500, headlineX=75, headlineY=10, bgColor1=bgColor3e, bgColor2=bgColor4e, componentX="6%", componentY=60, componentWidth=650,
           componenHeight=600, componentRadius="10px", listBorder="3px solid #1f1f1f", listBorderRadius="10px"} = props
    console.log(componentWidth / (650/75))

    return (
        <div style={{display:"flex", position:"relative", justifyContent:"flex-start", backgroundColor:bgColor1, width:componentWidth, height:componenHeight,
                     top:componentY, left:componentX, borderRadius:componentRadius}}>

            <div>
                <Headline text="Ausgaben und Einkommen" width={headlineWidth} top={headlineY} left={headlineX}/>
            </div>

            <div>
              <div style={{display:"flex", flexDirection: "column", justifyContent:"flex-start", backgroundColor:bgColor2, width:(componentWidth-55), 
                           height:(componenHeight-100) ,border:listBorder, borderRadius:listBorderRadius, position:"relative", top:50, left:-475}}>
                {props.generateList}
              </div>

              <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", position:"relative", top:53, left:-475}}>
                <StatusDropBox onChange={props.dropBoxColorChange} id="ListDropBox"/>

                <AmoutInput value={props.inputValue} onChange={props.getInput} width={componentWidth-245} left={5}/>

                <AddButton left={10} click={props.addButtonClick}/>
              </div>
            </div>

        </div>
    )
}

{/*
<div className='List' style={{display: "flex", justifyContent: "flex-start", backgroundColor: bgColor3e, position: "relative", 
                              width:650, height: 600, left:"6%", top:60, borderRadius: "10px"}}>


            <div>
              <div style={{display: 'flex', flexDirection: "column", justifyContent: "flex-start", backgroundColor: bgColor4e, border: "3px solid #1f1f1f", 
                  width: 590, height: 500, position: "relative", top: 50, left: -475,  borderRadius:"10px"}}>
                 {updateList()}
              </div>


                <StatusDropBox onChange={dropBoxColor} id="ListDropBox" top="54px" left="-700px"/>
              <div>
                <AmoutInput value={inputAmout} onChange={getInputAmout} width="395px" top="18px" left="-425px"/>
                </div>
              <div>
                <AddButton top="-18px" left="80px" click={manuelAddData}/>
              </div>
            </div>
          </div>
*/}