import React from "react";
import { CostIncommListItem } from "../Components/costIncomListItem";
import { exampleData } from "../Data/list";

export function GenerateCostIncomList(){
    let listItem = []

    for (let i = 0; i < exampleData.length; i++){
        listItem.push(<li key={exampleData[i].id}> <CostIncommListItem state={exampleData[i].state} 
                                          date={exampleData[i].date.day + "." + exampleData[i].date.month + "." + exampleData[i].date.year}
                                          amount={exampleData[i].amount} id={exampleData[i].id} x={5}/></li>)
    }
    return (<ul> listItem </ul>)
}


Hier: (Funktion bereits getestet und erfolgreich eingebaut.) die entstandende liste von exampledata abhängig machen
In App.js: alle funktionen ein script geben