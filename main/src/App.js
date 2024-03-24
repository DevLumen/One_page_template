import './App.css';
import Home from './components/Landing page/home';
// import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
