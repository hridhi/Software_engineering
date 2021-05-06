import React from "react";
import './Admin_home.css';
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
    <Nav.Link href="/allot" id="allot">Exam slot allocation</Nav.Link>
    <Nav.Link href="/alalter">Allotment alteration</Nav.Link>
    <Nav.Link href="/aldetails">Allotment details</Nav.Link>
    <Nav.Link href="/newreg" id="newfaculty">New faculty registeration</Nav.Link>
    <Nav.Link href="/anotify">Notifications</Nav.Link>
  </Nav>
  <Nav>
 <Button variant="dark" href="/" value="Logout" id="Logout" >Logout</Button>
  </Nav>
</Navbar.Collapse>
</Navbar>
  <div className="image">
        <p ><b> “The life so short, the craft so long to learn.”
                                        ― Hippocrates</b>
       
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