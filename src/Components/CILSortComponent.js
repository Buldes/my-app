import { SortButton } from "../Buttons/sortButton";
import React from "react";
import { AmoutSortClick, DateSortClick, StateSortClick } from "../Functions/DataFunctions/CILSortBarSorting";

export function CILSortBar(){
    return (<div style={{width:605, justifyContent:"flex-start", flexDirection:"row", position:"relative", left:5, direction:"ltr"}}>
                <SortButton text="Status" width="175px" click={StateSortClick}/>
                <SortButton text="Datum" width="182px" click={DateSortClick}/>
                <SortButton text="Betrag" width="248px" click={AmoutSortClick}/>
            </div>)
}