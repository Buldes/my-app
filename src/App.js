import React, { useEffect} from 'react';
import './App.css';
import { BankBalanceLable } from './Lable/bankBalanceLable';
import { PieChartComponent } from './Components/defaultPieChartComponent';
import { SmallInfoComponent } from './Components/smallInfoComponent';
import { CILComponent } from './Components/cost-incommListComponent';
import { downArearStyle, upArearStyle } from './Styles/arearStyles';
import { monthCostAvarge, monthCost, monthIncomm, setMonthCost } from './Data/float';
import { GenerateCIL } from './Functions/generateCILItem';
import { CILAddBar } from './Components/CILaddKomponent';
import { CILSortBar } from './Components/CILSortComponent';
import { GenerateData } from './Functions/DataFunctions/generateData';
import { exampleData } from './Data/list';
import { UpdateLables } from './Functions/UpdateLables';

function App() {
  useEffect(() => { document.title = `Kontostand`; });

  return (
    <div className='App'>

      <div className='up-area' style={upArearStyle}>

        <BankBalanceLable text={exampleData[exampleData.length-1].bankBalance}/>

        <SmallInfoComponent cost={monthCost} avarge={monthCostAvarge}/>

        <PieChartComponent cost={monthCost} incomm={monthIncomm} top="-340px" left="10%"/>

     </div>
     <button onClick={GenerateData}>Generate New Random Data</button>
     <button onClick={UpdateLables}>Update Lable</button>
     <button onClick={setMonthCost(20)}>Test</button>
     <input onChange={(e) => setMonthCost(e.target.value)}/>

      <div className='down-arear' style={downArearStyle}>
          <CILComponent addBar={CILAddBar()} generateList={GenerateCIL()} sortBar={CILSortBar()}/> 
      </div>

    </div>
  );
}

export default App;
