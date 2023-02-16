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
  const data = [
    { name: 'Ausgaben', value: 400},
    { name: 'Einkommen', value: 300 },]
  const COLORS = ["#ff0000", "#00ff00"]

  return (
    <div className='App'>
      <div className='up-area' style={{backgroundColor:"#1f1f1f", width:"100%", height:500}}>
        <div style={{ position:"relative", top:100, ...zentrierungX}}>
          <label style={{ background: "#3e3e3e", fontSize: "60px", color: "white", borderRadius: "50%", height:300, width: 300, ...defaultLook1 }}>{dailyMoney}€</label>
          </div>
          <label style={{fontSize: "25px", position: "relative", top:-110, left:"65%", backgroundColor:"#5e5e5e", width:300, borderRadius:"20px", ...defaultLook1}}>Ausgaben</label>
        <div className="Small-Info" style={{ position: "relative", height: 100, width: 300, left: "65%", top: -100, backgroundColor: "#5e5e5e", borderRadius: "10px"}}>
          <label style={{ fontSize: "25px", position: "relative", top: 10, left: 20, width: 100, height: 30, backgroundColor: "transperent", textAlign: "left", whiteSpace: "nowrap", ...defaultLook2 }}>Durchschnitt:  {monthAvarge}€</label>
          <label style={{ fontSize: "25px", position: "relative", top: 60, left: -210, width: 100, height: 30, backgroundColor: "transperent", textAlign: "left", whiteSpace: "nowrap", ...defaultLook2 }}>Diesen Monat:  {monthCost}€</label>
        </div>
      <div className='Pi Chart' style={{backgroundColor:"#1f1f1f", position: "relative", top:-340, left:"10%", transform: "flex", width:500, height: 350, borderRadius: "25px"}}>
        <VictoryPie
          data={[
          { x: "Ausgaben", y: monthCost },
          { x: "Einkommen", y: monthIncomm}]}
          animate={{duration:2000}}
          innerRadius = {80}
          cornerRadius = {"10"}
          colorScale={["#9f2f1f", "#2f9f1f"]}
          style={{
            data: {fillOpacity: 1, stroke: "#1f1f1f", strokeWidth: 2 },
            labels: {fontSize: 20, fill: "#ffffff"} ,transform: "flex"}}/>
        </div>
     </div>
    </div>
  );
}


export default App;
