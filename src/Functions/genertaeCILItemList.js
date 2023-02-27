import React from "react";
import { exampleData } from "../Data/list";
import { CILItem } from "../Components/costIncomListItem";


export var listItem = []


export function RegenertateCILItemList(){

    let listItems = []

    for (let i = 0; i < exampleData.length; i++){
        listItems.push(<li key={exampleData[i].id}> <CILItem state={exampleData[i].state} 
                                          date={exampleData[i].date.day + "." + exampleData[i].date.month + "." + exampleData[i].date.year}
                                          amount={exampleData[i].amount} id={exampleData[i].id} x={5}/></li>)
    }

    listItem = listItems
}