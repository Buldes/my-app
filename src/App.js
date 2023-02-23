import React, { useState , useEffect} from 'react';
import './App.css';
import { VictoryPie } from 'victory'
import { AddButton, DeleteButton } from './Buttons/variousButtons';
import { defaultTextSytle , centeringX} from './Styles/TextStyles.js';
import { centering } from './Styles/Look.js';
import { Headline } from './Lable/HeadLines';
import { BankBalanceLable } from './Lable/bankBalanceLable';
import { TextLable } from './Lable/textLable';
import { ListLable } from './Lable/listLable';

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

  function manuelAddData(){
    const dropBox = document.getElementById("ListDropBox")
    const dropBoxValue = dropBox.options[dropBox.selectedIndex].value
    const amoutInput = parseFloat(inputAmout)

    if (isNaN(amoutInput)){
      console.log('Ein Fehler ist aufgetreten. Es wurde keine Zahl eingegeben');
    }
    else{
      console.log("Perfekt!")
      addData({newState:{dropBoxValue}, newDay:{}, newMonth:{}, newYear:{}, newAmount:{amoutInput}})
    } 
  }

  function getInputAmout(event){
    inputAmout = event.target.value
  }

  function updateList(){
     let listItem = []
    for (let i = 0; i < exampleData.length; i++){
      listItem.push(dailyListItem({the_state: exampleData[i].state, 
                    the_date: (exampleData[i].date.day + "." + exampleData[i].date.month + "." + exampleData[i].date.year),
                    the_amount: exampleData[i].amount, x: 5, the_id:exampleData[i].id, 
                    key: exampleData[i].id}))}
    return listItem
  }

  function dailyListItem(props){
      return (
      <div key={props.key} style={{margin: "5px 0", height: 35, width: 580, borderRadius: "5px", backgroundColor: "#2e2e2e", display: 'flex', position: "relative", top: props.y, left:props.x, alignItems: "center"}} >
        <ListLable text={props.the_state} id={props.the_id} width="150px" left="5px"/>
        <ListLable text={props.the_date} id={props.the_id} width="180px" left="10px"/>
        <ListLable text={props.the_amount + "€"} id={props.the_id} width="200px" left="15px"/>
        <DeleteButton left="20px"/>
      </div>)}

  function dropBoxColor(event){
    const select = document.getElementById("ListDropBox")
    const selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue === "Einkommen"){
      select.style.backgroundColor = '#2f9f1f'
      select.style.borderColor = '#2f9f1f'
    }
    else{
      select.style.backgroundColor = '#ef2f2f'
      select.style.borderColor = '#ef2f2f'
    }}
  

  return (
    <div className='App'>
      <div className='up-area' style={{backgroundColor:"#1f1f1f", width:"calc(100% - 10px)", height:500, borderRadius: "25px", position: "relative", top: 5, margin: "0 5px"}}>

        <div style={{ position:"relative", top:100, ...centeringX}}>
          <BankBalanceLable text={dailyMoney}/>
        </div>
          <Headline text="Ausgaben" top="-110px" left="65%" width="300px"/>
        <div className="Small-Info" style={{ position: "relative", height: 100, width: 300, left: "65%", top: -100, backgroundColor: "#5e5e5e", borderRadius: "10px"}}>
          <TextLable top="15px" left="20px" width="100px" backgroundColor="transperent" text={"Durchschnitt: " + monthAvarge + "€"}  add={{whiteSpace:"nowrap", transform: "flex"}}/>
          <TextLable top="30px" left="20px" width="100px" backgroundColor="transperent" text={"Diesen Monat: " + monthCost + "€"}  add={{whiteSpace:"nowrap", transform: "flex"}}/>
        </div>
        <div className='Pi Chart' style={{backgroundColor:"#2e2e2e", position: "relative", top:-340, left:"10%", transform: "flex", width:500, height: 350, borderRadius: "25px"}}>
          <div>
            <Headline width="300px" left="20%" top="10px" text="Diesen Monat"/>
          </div>
          <VictoryPie
            data={[
            { x: "Ausgaben", y: parseFloat(monthCost)},
            { x: "Einkommen", y: parseFloat(monthIncomm)}]}
            animate={{duration:2000}}
            innerRadius={80}
            cornerRadius={10}
            colorScale={["#9f2f1f", "#2f9f1f"]}
            style={{
              data: {fillOpacity: 1, stroke: "#2e2e2e", strokeWidth: 3 },
              labels: {fontSize: 20, fill: "#ffffff"} ,transform: "flex"}}/>
        </div>
      <div className='down-arear' style={{backgroundColor: "#2f2f2f", width: "100%", height: 10000, top: -270, position: "relative", borderRadius: "25px"}}>
            <div className='List' style={{display: "flex", justifyContent: "flex-start", backgroundColor: "#3e3e3e", position: "relative", width:650, height: 600, left:"6%", top:60, borderRadius: "10px"}}>
              <div>
                <Headline text="Ausgaben und Einkommen" width="500px" top="10px" left="75px"/>
              </div>
            <div>
              <div style={{display: 'flex', flexDirection: "column", justifyContent: "flex-start", backgroundColor: "#4e4e4e", border: "3px solid #1f1f1f", width: 590, height: 500, position: "relative", top: 50, left: -475,  borderRadius:"10px"}}>
                 {updateList()}
              </div>
                <select  onChange={dropBoxColor} id="ListDropBox" style={{backgroundColor: "#2f9f1f", borderColor: "#2f9f1f", borderRadius: "10px", width: 140, height: 35, fontSize: "20px", position:"relative", top: 54, left: -700, ...defaultTextSytle}}>
                  <option value="Einkommen">Einkommen</option>
                  <option value="Ausgaben">Ausgaben </option>
                </select>
              <div>
                <input value={inputAmout} onChange={getInputAmout} style={{backgroundColor: "#5e5e5e", borderColor: "#000000", border: "3px solid #000000", borderRadius: "10px", width: 395, height: 30, fontSize: "20px", position:"relative", top: 18, left: -425, ...defaultTextSytle}}></input>
              </div>
              <div>
                <AddButton top="-18px" left="80px" click={manuelAddData}/>
              </div>
            </div>
          </div>  
      </div>
     </div>

    </div>
  );
}


export default App;
