
import './App.css';
import React, { Component } from 'react';
//https://exam-alteration.firebaseapp.com/
import 'bootstrap/dist/css/bootstrap.min.css';
import home from "./Componets/Home";
import flogin from "./Componets/Faculty_login";
import alogin from "./Componets/Admin_login";
import ahome from "./Componets/Admin_home";
import fhome from "./Componets/Faculty_home";
import allot from "./Componets/exam_slot_assigning";
import alalter from "./Componets/allot_alter";
import aldetails from "./Componets/allot_details";
import ForgetPassword from "./Componets/Forgot_password";
import passwordChange from './Componets/password_change';
import Feedback from "./Componets/feedback";
import neww from "./Componets/new_faculty";
import view from "./Componets/view_activity";
import swap from "./Componets/swap";
import anotify from "./Componets/anotifications";
import fnotify from "./Componets/fnotifications";
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import AllocationTime from './Componets/view_allot';
class App extends Component {
  render() {
    return (
<BrowserRouter>
        
            <Switch>
             <Route path="/" component={home} exact/>
             <Route path="/flogin" component={flogin} exact/>
             <Route path="/alogin" component={alogin} exact/>
             <Route path="/ahome" component={ahome} exact/>
             <Route path="/fhome" component={fhome} exact/>
             <Route path="/allot" component={allot} exact/>
             <Route path="/alalter" component={alalter} exact/>
             <Route path="/aldetails" component={aldetails} exact/>
             <Route path="/Passchange" component={passwordChange} exact/>
             <Route path="/forget" component={ForgetPassword} exact/>
             <Route path="/feedback" component={Feedback}></Route>
             <Route path="/newreg" component={neww}></Route>
             <Route path="/viewact" component={view}></Route>
             <Route path="/swap" component={swap}></Route>
             <Route path="/anotify" component={anotify}></Route>
             <Route path="/fnotify" component={fnotify} exact/>
             <Route path="/AllocationTime" component={AllocationTime} exact/>
             
             </Switch>
             </BrowserRouter>
      
    );
  }
}


export default App;