import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import './App.css'
export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
