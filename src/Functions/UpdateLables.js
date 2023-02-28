import { monthCost } from "../Data/float";
import { BankBalanceLableUdate, UpdatePieChart, SmallInfoUpdate } from "./UpdateKomponentsUpArear";

export function UpdateLables(){
    console.log(monthCost)
    SmallInfoUpdate()
    BankBalanceLableUdate()
    console.log(monthCost)
}