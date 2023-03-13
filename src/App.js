import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import { ParallaxProvider } from 'react-scroll-parallax';
import Idar from './screens/portfolios/Idar';
import ScrollToTop from './components/ScrollToTop';
import UwuShoppingSite from './screens/portfolios/UwuShoppingSite';
import PlagueDoctor from './screens/portfolios/PlagueDoctor';
import EasyReport from './screens/portfolios/EasyReport';
import TiongHuaKPZ from './screens/portfolios/TiongHuaKPZ';
import DuoAgency from './screens/portfolios/DuoAgency';
import ParkPerak from './screens/portfolios/ParkPerak';

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={< HomeScreen />}></Route>

          {/* Academic Projects */}
          <Route path='/idar' element={< Idar />}></Route>
          <Route path='/uwu' element={< UwuShoppingSite />}></Route>
          <Route path='/plaguedoctor' element={< PlagueDoctor />}></Route>
          <Route path='/easy' element={< EasyReport />}></Route>

          {/* Personal Projects */}
          <Route path='/parkperak' element={< ParkPerak />}></Route>

          {/* Design Projects */}
          <Route path='/tionghua' element={< TiongHuaKPZ />}></Route>
          <Route path='/duo' element={< DuoAgency />}></Route>
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
