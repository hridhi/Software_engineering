import React from "react";
import './Faculty_home.css';
import { Nav, Navbar,Button} from "react-bootstrap";
import Calendar from 'react-calendar';
const ahome=()=>{
    return(
      <span>
        <div className="ahome">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">Exam alteration helper</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="/AllocationTime">View allocated time</Nav.Link>
    <Nav.Link href="/swap">Swap Request</Nav.Link>
    <Nav.Link href="/viewact">View activity</Nav.Link>
    <Nav.Link href="/fnotify">Notifications</Nav.Link>
    <Nav.Link href="/Passchange" id="passchange">Password change</Nav.Link>
    <Nav.Link href="/feedback">Feedback</Nav.Link>
  </Nav>
  <Nav>
 <Button variant="dark" id="Logout" href="/">Logout</Button>
  </Nav>
</Navbar.Collapse>
</Navbar>
  <div className="image">
        <p ><b> “The life so short, the craft so long to learn.”
                                        ― Hippocrates
                                </b>
       
        </p>
        </div>
        <div className="calender">
        <Calendar activeMonth={new Date()} />
        <br></br>
        <br></br>
      
      </div>
</div>
</span>
    )
}
export default ahome;