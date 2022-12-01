import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './home/home.js';
import NavigationBar from './navigationBar/navigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={ <Home />}/>
    
      </Routes>
    </>
    
  );
}

export default App;
