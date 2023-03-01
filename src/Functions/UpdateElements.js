import { monthCost } from "../Data/float";
import { UpdateCIL } from "./updateCIL";
import { BankBalanceLableUdate, UpdatePieChart, SmallInfoUpdate } from "./UpdateKomponentsUpArear";

export function UpdateElemets(){
    console.log(monthCost)
    SmallInfoUpdate()
    BankBalanceLableUdate()
    UpdateCIL()
    console.log(monthCost)
}