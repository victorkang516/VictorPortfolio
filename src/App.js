import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import { ParallaxProvider } from 'react-scroll-parallax';
import Idar from './screens/portfolios/Idar';

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< HomeScreen />}></Route>
          <Route exact path='/idar' element={< Idar />}></Route>
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
