import React from "react";
import { VictoryPie } from "victory";

export function DefaultPieChart(props){
    if (props.data[0]["y"] === 0 && props.data[1]["y"] === 0){
        console.log("Error")
        return <VictoryPie data={[{x:"Keine Daten", y:1}, {x:"Keine Daten", y:3}]} animate={{duration:2000}}
                        innerRadius={props.innerRadius} cornerRadius={props.cornerRadius} 
                        colorScale={["#2f1f1f", "#1f2f1f"]}
                        style={{
                            data: {fillOpacity: props.transperents, stroke:props.borderColor, strokeWidth: props.borderWidth },
                            labels: {fontSize: 20, fill: "#ffffff"}, transform:"flex"}}/>
    }

    return <VictoryPie data={props.data} animate={{duration:2000}}
                        innerRadius={props.innerRadius} cornerRadius={props.cornerRadius} 
                        colorScale={props.colors}
                        style={{
                            data: {fillOpacity: props.transperents, stroke:props.borderColor, strokeWidth: props.borderWidth },
                            labels: {fontSize: 20, fill: "#ffffff"}, transform:"flex"}}/>
}
/*<VictoryPie
            data={[
            { x: "Ausgaben", y: parseFloat(monthCost)},
            { x: "Einkommen", y: parseFloat(monthIncomm)}]}
            animate={{duration:2000}}
            innerRadius={80}
            cornerRadius={10}
            colorScale={["#9f2f1f", "#2f9f1f"]}
            style={{
                data: {fillOpacity: 1, stroke: "#2e2e2e", strokeWidth: 3 },
                labels: {fontSize: 20, fill: "#ffffff"} ,transform: "flex"}}/>*/