import { monthCost, monthCostAvarge } from "../Data/float";
import { exampleData } from "../Data/list";
import { CalculateMonthAvarge } from "./Analyse/calculateMonth";

export function BankBalanceLableUdate(){
    document.getElementById("BankBalance").textContent = parseFloat(exampleData[exampleData.length-1].bankBalance).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'EUR'})
}

export function SmallInfoUpdate(){
    CalculateMonthAvarge()
    document.getElementById("MonthCostAvarge").textContent = "Durchschnitt: " + parseFloat(monthCostAvarge).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'EUR'})
    document.getElementById("MonthCost").textContent = "Diesen Monat: " + parseFloat(monthCost).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'EUR'})
}
