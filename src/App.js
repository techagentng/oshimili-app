import React from 'react';
import './App.css';
import BillsLanding from './pages/billslanding';
import AirtimeData from './pages/AirtimeData/AirtimeData';
import BuyBundle from './pages/Cabletv/Cabletv'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FinanceServices from './pages/FinanceServices/FinanceServices';
import Sidebar from './components/navigation/sidebar';
import DSTV from './pages/Cabletv/Cable1';
import Home from './pages/Home/Home';
import Cable2 from './pages/Cabletv/Cable2';
import Subscribe from './pages/Cabletv/Step1';
import Success from './pages/Success/success';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const theme = createTheme({
      palette: {
        primary: {
          main: '#596572',
        }
      }
  })
  return (
    <ThemeProvider theme={theme}>
        <div className='homepage'>
          <Routes>
              <Route exact path="/landing" element={<BillsLanding/>}/>
            </Routes>
            
              <Routes>
                <Route exact path="/" element={<BillsLanding />}/>
                <Route exact path="/airtimedata" element={<AirtimeData/>}/>
                <Route exact path="/success" element={<Success />}/>
                <Route exact path="/finance-services" element={<FinanceServices />}/>
                <Route exact path="/buybundle" element={<BuyBundle />}/>
                <Route exact path="/sub/dstv" element={<DSTV />}/>
                <Route exact path="/sub/boxoffice" element={<Cable2 />}/>
                <Route exact path="/sub" element={<Subscribe />}/>
                <Route exact path="/top-up" element={<BuyBundle />}/>
                <Route exact path="/vtuplus" element={<BuyBundle />}/>
              </Routes>    
        </div>
    </ThemeProvider>
  );
}

export default App;
