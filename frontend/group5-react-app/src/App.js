import logo from './logo.svg';
import { Routes,  Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home.js';
import AddJob from './Component/AddJob.js';
const App = () => {
  
   return (
    
     <div>
       <Routes>
         <Route path="/" element ={<Home />}/>
         <Route path="/add-job" element ={<AddJob/>}/>
         </Routes> 
       </div>
   );
 }
 
 export default App;
