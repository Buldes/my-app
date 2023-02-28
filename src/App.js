import React, { useEffect} from 'react';
import './App.css';
import { BankBalanceLable } from './Lable/bankBalanceLable';
import { PieChartComponent } from './Components/defaultPieChartComponent';
import { SmallInfoComponent } from './Components/smallInfoComponent';
import { CILComponent } from './Components/cost-incommListComponent';
import { downArearStyle, upArearStyle } from './Styles/arearStyles';
import { monthAvarge, monthCost, monthIncomm, dailyMoney } from './Data/float';
import { GenerateCIL } from './Functions/generateCILItem';
import { CILAddBar } from './Components/CILaddKomponent';
import { CILSortBar } from './Components/CILSortComponent';
import { GenerateData } from './Functions/DataFunctions/generateData';
import { exampleData } from './Data/list';
import { BankBalanceLableUdate } from './Functions/Analyse/UpdateLablesUpArear';
import { CalculateMonthAvarge } from './Functions/Analyse/calculateMonth';

function App() {
  useEffect(() => { document.title = `Kontostand`; });

  return (
    <div className='App'>

      <div className='up-area' style={upArearStyle}>

        <BankBalanceLable text={exampleData[exampleData.length-1].bankBalance}/>

        <SmallInfoComponent cost={monthCost} avarge={monthAvarge}/>

        <PieChartComponent cost={monthCost} incomm={monthIncomm} top="-340px" left="10%"/>

     </div>
     <button onClick={GenerateData}>Generate New Random Data</button>
     <button onClick={BankBalanceLableUdate}>Update Lable</button>
     <button onClick={CalculateMonthAvarge}>Calculate monthAvarge</button>

      <div className='down-arear' style={downArearStyle}>
          <CILComponent addBar={CILAddBar()} generateList={GenerateCIL()} sortBar={CILSortBar()}/> 
      </div>

    </div>
  );
}

export default App;
