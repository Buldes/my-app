import { exampleData } from "../../Data/list";
import { monthAvarge, monthCost } from "../../Data/float";
import { yearMonthData, DataSorting } from "./onYearDataSorting";

export function CalculateMonthAvarge(){
    DataSorting()

    for (let i = 1; i != 13; i++){
        
        var totalCost = 0
        var totslIncom = 0

        for (let a = 0; a != yearMonthData[i].lenght; a++){
            console.log(yearMonthData[i][a])
        }
    }
}