import { exampleData } from "../../Data/list";
import { UpdateCIL } from "../updateCIL";

export function sortDataByDate(){
    exampleData.sort(function(a, b) {
        // Vergleiche Jahr
        if (a.date.year < b.date.year) return -1;
        if (a.date.year > b.date.year) return 1;
        // Wenn die Jahre gleich sind, vergleiche Monat
        if (a.date.month < b.date.month) return -1;
        if (a.date.month > b.date.month) return 1;
        // Wenn die Jahre und Monate gleich sind, vergleiche Tag
        if (a.date.day < b.date.day) return -1;
        if (a.date.day > b.date.day) return 1;
        // Wenn alle gleich sind, bleibt die Reihenfolge unverändert
        return 0;
      })
      UpdateCIL()
}

export function sortDataByAmout(){
    exampleData.sort(function(a, b){
        if (a.amount < b.amount) return -1
        if (a.amount > b.amount) return 1
        return 0
    })
    UpdateCIL()
}

export function sortDataByStatus(){
    exampleData.sort(function(a, b){
        if (a.state === b.state) return 0
        if (a.state === "Einkommen") return 1
        return -1
    })
    UpdateCIL()
}