import React from "react";
import { Headline } from "../Lable/HeadLines";
import { TextLable } from "../Lable/textLable";
import { bgColor5e } from "../Styles/backGroundColor";

export function SmallInfoComponent(props){
    const {bgColor=bgColor5e, headLine="Ausgaben", componentX="65%", componentY=-110, componentWidth="300px", textLableTop=15, textLableLeft=20,
           lable1Text="Durchschnitt: " + props.avarge + "€", lable2Text="Diesen Monat: " + props.cost + "€", lableHight=100, borderRadius="10px"} = props

    return (
        <div style={{position:"relative"}}>
            <Headline text={headLine} top={componentY} left={componentX} width={componentWidth}/>
            <div style={{position:"relative", height:lableHight, width:componentWidth, left:componentX, top:(componentY+10), backgroundColor:bgColor, borderRadius:borderRadius}}>
                <TextLable top={textLableTop} left={textLableLeft} text={lable1Text} add={{whiteSpace:"nowrap", transform: "flex"}}/>
                <TextLable top={textLableTop*2} left={textLableLeft} text={lable2Text} add={{whiteSpace:"nowrap", transform: "flex"}}/>
            </div>
        </div>
    )
}

/*
position: "relative", height: 100, width: 300, left: "65%", top: -100, backgroundColor: bgColor5e, borderRadius: "10px"}
*/