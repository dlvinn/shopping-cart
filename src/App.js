import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <div>
        <Routes>
        <Route path='/' element = {<Home />} exact />
        <Route path='/cart' element = {<Cart />} exact />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
