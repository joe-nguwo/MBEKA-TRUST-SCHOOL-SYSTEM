import {Routes,Route} from "react-router-dom"
import './App.css';
import Loginpage from '@/pages/login/login.tsx';

function App() {


  return (
    
    <>
    <Routes>
      <Route path="/" element={ <Loginpage/>}></Route>
    </Routes>
      <Loginpage /> 
  
      
    </>
  );
}

export default App;
