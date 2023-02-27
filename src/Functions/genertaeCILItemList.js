import React from "react";
import { exampleData } from "../Data/list";
import { CILItem } from "../Components/costIncomListItem";


export var listItem = []


export function RegenertateCILItemList(){

    var listItems = []

    for (let i = 0; i < exampleData.length; i++){
        var dateDay = exampleData[i].date.day.toString()
        var dateMonth = exampleData[i].date.month.toString()
    
        listItems.push(<li key={exampleData[i].id}> <CILItem state={exampleData[i].state} 
                                          date={dateDay.padStart(2, '0') + "." + dateMonth.padStart(2, '0') + "." + exampleData[i].date.year}
                                          amount={exampleData[i].amount} id={exampleData[i].id} x={5}/></li>)
    }

    listItem = listItems
}