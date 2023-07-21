
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Login from './components/pages/login';
import Forgotpass from './components/pages/forgotpass'
import Dashboard from './components/pages/dashboard';
import Recorder from './components/pages/recorder';
import Missedcall from './components/pages/missedcall';




function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>


          <Route
           path = "/"
           element = { <div>
            <Login/>
           </div>
          }> 


          
         </Route>
          <Route path = "/forgotpass" element={<Forgotpass/>}> 
            
          </Route>

          <Route path='/dashboard' element = {<Dashboard/>}>        
          </Route>


          <Route path='/missedcall' element = {<Missedcall/>}>        
          </Route>


          <Route path='/recorder' element = {<Recorder/>}>        
          </Route>

        </Routes>      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
