// import logo from './logo.svg';
// import './App.css';
import SignUp from './SignUp';
import Intro from './Intro';
import { Outlet } from 'react-router-dom';
import LogIn from './LogIn';


function App() {
  return (
    <div className="
    grid 
    grid-cols-3
    
    p-10
    ">
      
      <Intro/>
      <Outlet/>
    </div>
  );
}

export default App;
