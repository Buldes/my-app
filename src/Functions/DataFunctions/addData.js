import { exampleData } from "../../Data/list"
import { UpdateCIL } from "../updateCIL"

export function addData(props){
    var newData = {id: (exampleData.length), state:props.newState, 
                  date: {day: props.newDay, month: props.newMonth, year: props.newYear}, amount: props.newAmount, amoutStr: props.amoutStr}
    exampleData.push(newData)
    console.log("Added New Data.")
    UpdateCIL()
  }