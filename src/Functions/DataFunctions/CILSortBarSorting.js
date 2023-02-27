import { sortDataByAmout, sortDataByDate, sortDataByStatus } from "./sort"

var clickId = null

export function StateSortClick(){
    clickId="State"
    sortDataByStatus()
    CILSortBarButton()
}

export function DateSortClick(){
    clickId="Date"
    sortDataByDate()
    CILSortBarButton()
}


export function AmoutSortClick(){
    clickId="Amout"
    sortDataByAmout()
    CILSortBarButton()
}



export function CILSortBarButton(){
    console.log(clickId)
}

//Hier:TextFarbe ändern