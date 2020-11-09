import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Home from './Home.js';
import Tasks from './Tasks.js';
import ImpLinks from './ImpLinks.js';
import Meetings from './Meetings.js';
import Notes from './Notes.js';
import {Provider} from 'react-redux'
import store from '../src/Redux/store.js'
import  {BrowserRouter,Route,Switch ,NavLink} from "react-router-dom";
function App() {
  return (
  
      <BrowserRouter>
        <Provider store={store}>
        <div>
        <Switch>
            <Route path="/React-Redux-State-Manaement-/login"component={Login}/>
            <Route path="/React-Redux-State-Manaement-/meetings"component={Meetings}/>
             <Route path="/React-Redux-State-Manaement-/notes"component={Notes}/>
            <Route path="/tasks"component={Tasks}/>
            <Route path="/React-Redux-State-Manaement-/implinks"component={ImpLinks}/>
            <Route path="/React-Redux-State-Manaement-/"  component={Home}/>

          </Switch> 
        </div>
</Provider>
      </BrowserRouter>
 
  );
}

export default App;
  