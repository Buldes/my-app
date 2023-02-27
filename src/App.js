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

function App() {
  useEffect(() => { document.title = `Kontostand`; });

  return (
    <div className='App'>
      <div className='up-area' style={upArearStyle}>

        <BankBalanceLable text={dailyMoney}/>

        <SmallInfoComponent cost={monthCost} avarge={monthAvarge}/>

        <PieChartComponent cost={monthCost} incomm={monthIncomm} top="-340px" left="10%"/>

     </div>

      <div className='down-arear' style={downArearStyle}>
          <CILComponent addBar={CILAddBar()} generateList={GenerateCIL()}/> 
      </div>

    </div>
  );
}

export default App;
