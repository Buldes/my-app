import React, { useEffect} from 'react';
import './App.css';
import { BankBalanceLable } from './Lable/bankBalanceLable';
import { bgColorGreen, bgColorR1 } from './Styles/backGroundColor';
import { PieChartComponent } from './Components/defaultPieChartComponent';
import { SmallInfoComponent } from './Components/smallInfoComponent';
import { CILComponent } from './Components/cost-incommListComponent';
import { downArearStyle, upArearStyle } from './Styles/arearStyles';
import { exampleData } from './Data/list';
import { monthAvarge, monthCost, monthIncomm, dailyMoney } from './Data/float';
import { GenerateCIL } from './Functions/generateCILItem';
import { UpdateCIL } from './Functions/updateCIL';

function App() {
  useEffect(() => { document.title = `Kontostand`; });

  var inputAmout

  function addData(props){
    var newData = {id: (exampleData.length), state:props.newState, 
                  date: {day: props.newDay, month: props.newMonth, year: props.newYear}, amount: props.newAmount, amoutStr: props.amoutStr}
    exampleData.push(newData)
    console.log("Added New Data.")
    UpdateCIL()
  }

  const manuelAddData = () => {
    const select = document.getElementById("ListDropBox")
    const selectedValue = select.options[select.selectedIndex].value;
    const amoutInput = parseFloat(inputAmout).toFixed(2)
    const currentDate = new Date();

    if (isNaN(amoutInput)){
      console.log('[Ein Fehler ist aufgetreten:] Es wurde keine Zahl eingegeben');
    }
    else if (amoutInput.length > 13)
    {
      console.log("Warnung: Zahl zu groß")
    }
    else{
      addData({newState:selectedValue, newDay:currentDate.getDate(), newMonth:currentDate.getMonth() + 1, newYear:currentDate.getFullYear(), newAmount:amoutInput})
    } 
  }

  const getInputAmout  = (event) =>{
    
    inputAmout = event.target.value
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
          <CILComponent generateList={GenerateCIL()} inputValue={inputAmout} dropBoxColorChange={dropBoxColor} getInput={getInputAmout} addButtonClick={manuelAddData}/> 
      </div>

    </div>
  );
}

export default App;
