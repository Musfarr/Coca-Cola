
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Login from './components/pages/login';
import Forgotpass from './components/pages/forgotpass'
import Dashboard from './components/pages/dashboard';
import Recorder from './components/pages/recorder';
import Missedcall from './components/pages/missedcall';
import Sidebar from './components/common/sidebar';
import Footer from './components/common/footer';




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

          <Route path='/dashboard' element = {
          <div>
          <Dashboard/>
          
          </div>
          }>        
          </Route>



          <Route path='/missedcall' element = {     
          <div>
            <Sidebar/>
            <Missedcall/>
          </div>
               }>        
          </Route>



          <Route exact path='/recorder' element = 
          {          
          <div>
            <Sidebar/>
            <Recorder/>
          </div>
          }>        
           </Route>

        </Routes>      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
