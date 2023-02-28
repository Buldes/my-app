import { exampleData } from "../../Data/list";

export function BankBalanceLableUdate(){
    document.getElementById("BankBalance").textContent = parseFloat(exampleData[exampleData.length-1].bankBalance).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'EUR'})
}

