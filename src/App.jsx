import Navbar from './container/Navbar';
import About from './container/About';
import AddPlayList from './container/addPlayList';
import React from "react";
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import SignIn from './container/signIn';
function App() {
  return (
    <div className="App">
             <Navbar/>
             <About/>
             <AddPlayList/>
             
          </div>  
     
        
    
  );
}

export default App;
