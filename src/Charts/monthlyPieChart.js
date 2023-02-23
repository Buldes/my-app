import React from "react";
import { bgColorGreen, bgColorR2 } from "../Styles/backGroundColor";
import { DefaultPieChart } from "./defaultPieChart";

export function MonthlyPieChart(props){
    return <DefaultPieChart data={props.data} innerRadius={80} cornerRadius={10} colors={[bgColorR2, bgColorGreen]} transperents={1} borderColor="#2e2e2e" borderWidth={3}/>
}