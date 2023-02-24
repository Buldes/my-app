import React, { useState , useEffect} from 'react';
import './App.css';
import { BankBalanceLable } from './Lable/bankBalanceLable';
import { bgColorGreen, bgColorR1 } from './Styles/backGroundColor';
import { PieChartComponent } from './Components/defaultPieChartComponent';
import { SmallInfoComponent } from './Components/smallInfoComponent';
import { CostIncommListComponent } from './Components/cost-incommListComponent';
import { downArearStyle, upArearStyle } from './Styles/arearStyles';
import { CostIncommListItem } from './Components/costIncomListItem';

function App() {
  useEffect(() => { document.title = `Kontostand`; });

  const [dailyMoney, setdailyMoney] = useState(85.36);
  const [monthAvarge, setMonthAvarge] = useState(15.33)
  const [monthCost, setMonthCost] = useState(10.67)
  const [monthIncomm, setMonthIncomm] = useState(20)
  var inputAmout;

  var exampleData = [{id: 0, state: "Einkommen", date: {day: "02", month: "02", year: "2022"}, amount: "2396.56"},
                    {id: 1, state: "Ausgaben", date: {day: "03", month: "02", year: "2022"}, amount: "163.97"}, 
                    {id: 2, state: "Ausgaben", date: {day: "04", month: "02", year: "2022"}, amount: "16.97"}]

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

  const handleClick = () => {
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
          <CostIncommListComponent generateList={addList()} inputValue={inputAmout} dropBoxColorChange={handleClick} getInput={getInputAmout} addButtonClick={manuelAddData}/> 
      </div>

    </div>
  );
}


export default App;
