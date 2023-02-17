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

  const exampleData = [{state: "Einkommen", date: {day: "02", month: "02", year: "2022"}, amount: "396.56", id: "1"},
                        {state: "Ausgaben", date: {day: "02", month: "02", year: "2022"}, amount: "16 3.97", id: "2"}]


  function monthCostSet(event){
    setMonthCost(event.target.value)}
  function monthIncommSet(event){
    setMonthIncomm(event.target.value)}

  function updateList(){
    for (let i = 0; i <= exampleData.length - 1; i++){
      console.log(exampleData[i].date.day)
      {dailyListItem({state: exampleData[i].state, 
                      date: (exampleData[i].date.day + "." + exampleData[i].date.month + "." + exampleData[i].date.year),
                      amount: exampleData[i].amount})}
    }
  }

  function dailyListItem(props){
      return (
      <div style={{margin: "5px 0", height: 35, width: 580, borderRadius: "5px", backgroundColor: "#2e2e2e", display: 'flex', position: "relative", top: props.y, left:props.x, display: "flex", alignItems: "center"}} >
        <label style={{backgroundColor: props.state === 'Einkommen' ? '#2f9f1f' : '#ef2f2f', width:150, borderRadius: "3px", fontSize:"22px", position:"relative", left: 5, textAlign: "middle", ...defaultLook2}}>{props.state}</label>
        <label style={{backgroundColor: "#5e5e5e", width:180, borderRadius: "3px", fontSize:"22px", textAlign: "middle", position: "relative", left: 10, ...defaultLook2}}>{props.date}</label>
        <label style={{backgroundColor: "#5e5e5e", width:200, borderRadius: "3px", fontSize:"22px", textAlign: "middle", position: "relative", left:15, ...defaultLook2}}>{props.amount} €  </label>
        <button style={{backgroundColor: "#ff1f1f", width: 25, height:25, borderRadius: "3px", position: "relative", left: 20, borderColor: "#ff1f1f"}}>X</button>
      </div>
  )}




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
            <div className='List' style={{display: "flex", justifyContent: "flex-start", backgroundColor: "#3e3e3e", position: "relative", width:650, height: 600, left:"12%", top:60, borderRadius: "10px"}}>
              <div>
                <label style={{backgroundColor: "#5e5e5e", width:500, height:35, borderRadius: "25px", fontSize:"22px", textAlign: "middle", position: "relative", top: 10, left: 75, ...defaultLook1}}>Ausgaben und Einkommen</label>
              </div>
            <div>
              <div style={{display: 'flex', flexDirection: "column", justifyContent: "flex-start", backgroundColor: "#4e4e4e", border: "3px solid black", width: 590, height: 500, position: "relative", top: 50, left: -475,  borderRadius:"10px"}}>
                {updateList()}
              </div>
              </div>
            </div>  
      </div>
     </div>

    </div>
  );
}


export default App;
