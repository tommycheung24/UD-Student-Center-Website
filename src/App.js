import { Routes, Route } from 'react-router-dom';
import Home from './home/home';
import NavigationBar from './navigationBar/navigationBar';
import Perkins from './perkins/perkins';
import Trabant from './trabant/trabant';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/perkins' element={ <Perkins/>}/>
        <Route path='/trabant' element={<Trabant/>}/>
        <Route path='*' element={ <Home />}/>
      </Routes>
    </>
    
  );
}

export default App;
