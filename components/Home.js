
import { Navbar,Nav,Form,Table,Carousel,Card,CardDeck,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect} from 'react';
import firebase from '../firebase';
import './Home.css';
function App() {
  const db = firebase.firestore();
  const [D,setD]=useState([]);
  const [feedback,setFeedback]=useState([]);

  useEffect(() =>{
    db.collection('ExamSchedule').onSnapshot(snapshot =>{
      setD(snapshot.docs.map(doc => doc.data()))
    })
    db.collection('Feedback').onSnapshot(snapshot =>{
      setFeedback(snapshot.docs.map(doc => doc.data().feedback))
    })
  },[]);
  
  return (
    <span>
    <div className="App">
      <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Exam Alteration Helper</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#Description" id="desc">Description</Nav.Link>
      <Nav.Link href="#ExamSchedules" id="examschedules" >Examschedule</Nav.Link>
      <Nav.Link href="#Reviews" id="reviews">Reviews</Nav.Link>
      <Nav.Link href="#Contact" id="contactus">Contact Us</Nav.Link>
    </Nav>
    <Form inline>
      <Nav.Link href="/alogin" id="alogin">Admin Login</Nav.Link>
     <Nav.Link href="/flogin" id="flogin">Faculty Login</Nav.Link>
    </Form>
  </Navbar>
  </>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="\Main image1.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="\MicrosoftTeams-image.png"
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>

<div  id="Description">
  <p className="desc" name="desc" id="descp">This website is intended for exam schedule alteration. 
The home page contains navigation to admin login, faculty login, 
shows the feedback of previous users , displays the description and 
achievements of the website. Next comes the admin/faculty login pages which 
enables us to login into their respective account with the help of 
 username and password. And if in case the user forgets password or 
too many failed attempts are taken place ,then necessary actions are taken.
 When it comes for alteration of allocation, the faculties can ask for
 modification or cancellation of their allotments as well as they can view 
their notifications , allotments of a particular date and their respective 
profile. While the admin can accept /reject the requests from faculties and 
sends the status of the allotments through mail. This website is pretty
 responsive and user friendly. Hope you enjoy browsing.
  </p>
  </div>
<div classname="exam" id="ExamSchedules">
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Serial Number</th>
      <th>Date</th>
      <th>Branch</th>
      <th>Subject</th>
      <th>Slot</th>
    </tr>
  </thead>
  <tbody>
    {console.log(D)}
  {D.map((row,index) => {
    const {Date,Branch,Subject,Slot} = row
    return (
      <tr>
        <td>{index+1}</td>
        <td>{Date}</td>
        <td>{Branch}</td>
        <td>{Subject}</td>
        <td>{Slot}</td>
      </tr>
    )
  })
}
  </tbody>
</Table>
<br></br>
<br></br>
</div>
<h1>Feedbacks</h1>
<div classname="rev" id="Reviews">
<CardDeck>
  <Card>
    <Card.Body>
      <Card.Title>Feedback 1</Card.Title>
      <Card.Text>
      {feedback[0]}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Feedback 2</Card.Title>
      <Card.Text>
        {feedback[1]}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Feedback 3</Card.Title>
      <Card.Text>
        {feedback[2]}
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</div>
<br></br>
<br></br>
<div id="Contact">
<Card>
  <Card.Header as="h5">Contact Us</Card.Header>
  <Card.Body>
    <Card.Text >
    Call us at: 9234-1234-45/78/90<br></br>
        or email us at: examalter@cb.amrita.edu<br></br>
	  we value your feedback! write to us at: feedback@amrita.edu
    </Card.Text>
    <Button href="www.linkedin.com/in/bandi-kishore-reddy-b1163a172" variant="primary" id="Linkedin" value="Linkedin" >Linkedin</Button>
  </Card.Body>
</Card>
  </div>
  </div>
  </span>
  );
}

export default App;
