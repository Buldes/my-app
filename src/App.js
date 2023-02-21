import React, { useState , useEffect} from 'react';
import './App.css';
import { VictoryPie } from 'victory'


function App() {
  useEffect(() => { document.title = `Kontostand`; });


  const [dailyMoney, setdailyMoney] = useState(85.36);
  const defaultLook1 = {color: "white", fontFamily: 'Arial', display: 'flex', alignItems: 'center', justifyContent: 'center'};
  const defaultLook2 = {color: "white", fontFamily: 'Arial'};
  const zentrierungX = {display: 'inline-block'};
  const [monthAvarge, setMonthAvarge] = useState(15.33)
  const [monthCost, setMonthCost] = useState(10.67)
  const [monthIncomm, setMonthIncomm] = useState(20)
  var inputAmout;

 var exampleData = [{id: 0, state: "Einkommen", date: {day: "02", month: "02", year: "2022"}, amount: "2396.56"},
                    {id: 1, state: "Ausgaben", date: {day: "03", month: "02", year: "2022"}, amount: "163.97"}, 
                    {id: 2, state: "Ausgaben", date: {day: "04", month: "02", year: "2022"}, amount: "16.97"}]


  function monthCostSet(event){
    setMonthCost(event.target.value)}

  function monthIncommSet(event){
    setMonthIncomm(event.target.value)}

  function addData(props){
    var newData = {id: (exampleData.length), state:props.newState, 
                  date: {day: props.newDay, month: props.newMonth, year: props.newYear}, amount: props.newAmount}
    exampleData.push(newData)
    console.log("Added New Data." + {exampleData})
  }

  function manuelAddData(){
    const dropBox = document.getElementById("ListDropBox")
    const dropBoxValue = dropBox.options[dropBox.selectedIndex].value
    addData({newState:{dropBoxValue}, newDay:{}, newMonth:{}, newYear:{}, newAmount:{}})  //required date and input amout
  }

  function updateList(){
     let listItem = []
    for (let i = 0; i < exampleData.length; i++){
      listItem.push(dailyListItem({the_state: exampleData[i].state, 
                    the_date: (exampleData[i].date.day + "." + exampleData[i].date.month + "." + exampleData[i].date.year),
                    the_amount: exampleData[i].amount, x: 5, the_id:exampleData[i].id, 
                    key: exampleData[i].id}))}
    return listItem}

  function dailyListItem(props){
      return (
      <div key={props.key} style={{margin: "5px 0", height: 35, width: 580, borderRadius: "5px", backgroundColor: "#2e2e2e", display: 'flex', position: "relative", top: props.y, left:props.x, alignItems: "center"}} >
        <label style={{backgroundColor: props.the_state === 'Einkommen' ? '#2f9f1f' : '#ef2f2f', width:150, borderRadius: "3px", fontSize:"22px", position:"relative", left: 5, textAlign: "middle", ...defaultLook2}}>{props.the_state}</label>
        <label style={{backgroundColor: "#5e5e5e", id: props.the_id, width:180, borderRadius: "3px", fontSize:"22px", textAlign: "middle", position: "relative", left: 10, ...defaultLook2}}>{props.the_date}</label>
        <label style={{backgroundColor: "#5e5e5e", id: props.the_id, width:200, borderRadius: "3px", fontSize:"22px", textAlign: "middle", position: "relative", left:15, ...defaultLook2}}>{props.the_amount} €  </label>
        <button style={{backgroundColor: "#ff1f1f", id: props.the_id, width: 25, height:25, borderRadius: "3px", position: "relative", left: 20, borderColor: "#ff1f1f"}}>X</button>
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

        <div style={{ position:"relative", top:100, ...zentrierungX}}>
          <label style={{ background: "#3e3e3e", fontSize: "60px", color: "white", borderRadius: "50%", height:300, width: 300, ...defaultLook1 }}>{dailyMoney}€</label>
          </div>
          <label style={{fontSize: "25px", position: "relative", top:-110, left:"65%", backgroundColor:"#5e5e5e", width:300, borderRadius:"20px", ...defaultLook1}}>Ausgaben</label>
        
        <div className="Small-Info" style={{ position: "relative", height: 100, width: 300, left: "65%", top: -100, backgroundColor: "#5e5e5e", borderRadius: "10px"}}>
          <label style={{ fontSize: "25px", position: "relative", top: 10, left: 20, width: 100, height: 30, backgroundColor: "transperent", textAlign: "left", whiteSpace: "nowrap", ...defaultLook2 }}>Durchschnitt:  {monthAvarge}€</label>
          <label style={{ fontSize: "25px", position: "relative", top: 60, left: -210, width: 100, height: 30, backgroundColor: "transperent", textAlign: "left", whiteSpace: "nowrap", ...defaultLook2 }}>Diesen Monat:  {monthCost}€</label>
        </div>
        <div className='Pi Chart' style={{backgroundColor:"#2e2e2e", position: "relative", top:-340, left:"10%", transform: "flex", width:500, height: 350, borderRadius: "25px"}}>
          <div>
            <label style={{fontSize: "22px", width: 300, height: 32, backgroundColor: "#5e5e5e", position: "relative", left:"20%", top: 10, borderRadius: "22px", ...defaultLook1}}>Diesen Monat</label>
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
                <label style={{backgroundColor: "#5e5e5e", width:500, height:35, borderRadius: "25px", fontSize:"22px", textAlign: "middle", position: "relative", top: 10, left: 75, ...defaultLook1}}>Ausgaben und Einkommen</label>
              </div>
            <div>
              <div style={{display: 'flex', flexDirection: "column", justifyContent: "flex-start", backgroundColor: "#4e4e4e", border: "3px solid #1f1f1f", width: 590, height: 500, position: "relative", top: 50, left: -475,  borderRadius:"10px"}}>
                 {updateList()}
              </div>
                <select  onChange={dropBoxColor} id="ListDropBox" style={{backgroundColor: "#2f9f1f", borderColor: "#2f9f1f", borderRadius: "10px", width: 140, height: 35, fontSize: "20px", position:"relative", top: 54, left: -700, ...defaultLook2}}>
                  <option value="Einkommen">Einkommen</option>
                  <option value="Ausgaben">Ausgaben </option>
                </select>
              <div>
                <input value={inputAmout} style={{backgroundColor: "#5e5e5e", borderColor: "#000000", border: "3px solid #000000", borderRadius: "10px", width: 395, height: 30, fontSize: "20px", position:"relative", top: 18, left: -425, ...defaultLook2}}></input>
              </div>
              <div>
                <button onClick={manuelAddData} style={{backgroundColor: "#2f9f1f", borderColor: "#2f9f1f", borderRadius: "10px", width: 35, height: 35, fontSize: "20px", position:"relative", top: -18, left: -200, ...defaultLook2}}>+</button>
              </div>
            </div>
          </div>  
      </div>
     </div>

    </div>
  );
}


export default App;
