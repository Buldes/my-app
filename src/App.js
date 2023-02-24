import React, { useEffect} from 'react';
import './App.css';
import { BankBalanceLable } from './Lable/bankBalanceLable';
import { bgColorGreen, bgColorR1 } from './Styles/backGroundColor';
import { PieChartComponent } from './Components/defaultPieChartComponent';
import { SmallInfoComponent } from './Components/smallInfoComponent';
import { CostIncommListComponent } from './Components/cost-incommListComponent';
import { downArearStyle, upArearStyle } from './Styles/arearStyles';
import { CostIncommListItem } from './Components/costIncomListItem';
import { exampleData } from './Data/list';
import { monthAvarge, monthCost, monthIncomm, dailyMoney } from './Data/float';
import { GenerateCostIncomList } from './Functions/generateListItem';

function App() {
  useEffect(() => { document.title = `Kontostand`; });

  var inputAmout

  function addData(props){
    var newData = {id: (exampleData.length), state:props.newState, 
                  date: {day: props.newDay, month: props.newMonth, year: props.newYear}, amount: props.newAmount}
    exampleData.push(newData)
    console.log("Added New Data.")
  }

  const manuelAddData = () => {
    const dropBox = document.getElementById("ListDropBox")
    const dropBoxValue = dropBox.options[dropBox.selectedIndex].value
    const amoutInput = parseFloat(inputAmout)

    if (isNaN(amoutInput)){
      console.log('[Ein Fehler ist aufgetreten:] Es wurde keine Zahl eingegeben');
    }
    else{
      console.log("Perfekt!")
      addData({newState:{dropBoxValue}, newDay:{}, newMonth:{}, newYear:{}, newAmount:{amoutInput}})
    } 
  }

  const getInputAmout  = (event) =>{
    
    inputAmout = event.target.value
  }

  function addList(){
     let listItem = []
    for (let i = 0; i < exampleData.length; i++){
      listItem.push(CostIncommListItem({the_state: exampleData[i].state, 
                    the_date: (exampleData[i].date.day + "." + exampleData[i].date.month + "." + exampleData[i].date.year),
                    the_amount: exampleData[i].amount, x: 5, the_id:exampleData[i].id, 
                    key: exampleData[i].id}))}
    return listItem
  }

  const dropBoxColor = () => {
    const select = document.getElementById("ListDropBox")
    const selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue === "Einkommen"){
      select.style.backgroundColor = bgColorGreen
      select.style.borderColor = bgColorGreen
    }
    else{
      select.style.backgroundColor = bgColorR1
      select.style.borderColor = bgColorR1
    }
  }

  return (
    <div className='App'>
      <div className='up-area' style={upArearStyle}>
        <BankBalanceLable text={dailyMoney}/>

        <SmallInfoComponent cost={monthCost} avarge={monthAvarge}/>

        <PieChartComponent cost={monthCost} incomm={monthIncomm} top="-340px" left="10%"/>

     </div>

      <div className='down-arear' style={downArearStyle}>
          <CostIncommListComponent generateList={GenerateCostIncomList()} inputValue={inputAmout} dropBoxColorChange={dropBoxColor} getInput={getInputAmout} addButtonClick={manuelAddData}/> 
      </div>

    </div>
  );
}


export default App;
