import { IncomCostMonthlyGenerate, incomCostMonthly } from "./IncomCostPerMonth";
import { setMonthCost, setMonthCostAverage } from "../../Data/float";

export function CalculateMonthAvarge(){
    IncomCostMonthlyGenerate()

    var totalCost = 0

    for (let i = 1; i != 13; i++){
        totalCost = totalCost + parseFloat(incomCostMonthly[i][1].amount)
    }

    setMonthCostAverage((totalCost / 12).toFixed(2))
    setMonthCost(incomCostMonthly.current[1].amount.toFixed(2))
}