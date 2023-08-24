
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/common/header';
import Homepage from './components/homepage';
import LoginPage from './components/login';

function App() {
  return (<>
  
  
  <BrowserRouter>

  <h1>Hello World!</h1>
  
   
    <div className='mainDiv'>
      
       
  <Routes>

        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<LoginPage/>}/> 
        </Routes>
    </div>

  </BrowserRouter>
  </>
    
    
  );
}

export default App;
