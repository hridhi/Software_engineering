import { Form,Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../firebase';
import { useState,useEffect } from 'react';
import './exam_slot_assigning.css';

function App() {
  const db = firebase.firestore();
  const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
  const [Faculty_id,setFaculty_id]=useState([]);
  const [email,setEmail]=useState([]);
  const [D2,setD2]=useState([]);
  function validity(req,inside){
    var i=0;
    for(i=0;i<inside.length;i++){
      if(inside[i]==req){
        return 1}}
      return 0 
    }
  useEffect(() =>{
    db.collection('FacultyDetails').onSnapshot(snapshot =>{
      setFaculty_id(snapshot.docs.map(doc => doc.data().ID))
    })
    db.collection('Extra').onSnapshot(snapshot =>{
      setEmail(snapshot.docs.map(doc => doc.data().email))
    })
    db.collection('FacultyDetails').onSnapshot(snapshot =>{
      setD2(snapshot.docs.map(doc => doc.data()))
    })
  })
  var ee=email[0];
    var facid;
    for (var j=0;j<D2.length;j++){
        
        if (ee==D2[j].Email){
          console.log(D2[j].Email);
          console.log(D2[j].ID);
            
          facid=D2[j].ID;
            break;
        }
    }
    console.log(facid);

  function add_details(e){
    e.preventDefault();
    let request =  {
        Faculty_id:document.getElementById('facid').value,
        date_s:document.getElementById('date_s').value,
        date:document.getElementById('date').value,
        time:document.getElementById('time').value,
        class:document.getElementById('class').value,
        time_s:document.getElementById('time_s').value,
        class_s:document.getElementById('class_s').value,
    }
    var t=0
    if(validity(request.Faculty_id,Faculty_id)){
    }
    else{
      alert('Wrong Credentials!!')
      t=1
    }
    if(t==1){}
    else{
      var noti= "Faculty "+facid+" has requested to swap allotments with "+request.Faculty_id+" Requested faculty allotment time: "+" data: "+request.date+" class: "+request.class+" Other faculty allotment time: "+" data: "+request.date_s+" class: "+request.class_s;
      db.collection("AdminDetails").doc("A0P2D17LNR5SqSMMoUVc").update({
          Notifications: arrayUnion(noti),
      }).then(function () {
        console.log("Document successfully updated!");
      }).catch(function (error) {
          console.error("Error removing document: ", error);
      });
      alert('Requested Admin!!')
    }

  }
  
  return (
    <span>
   <div className="rrt">
        <Button variant="primary" href="/fhome" className="ff" id="Home">Home</Button>
       <div className="amrita">
       <Card border="dark" style={{ width: '30rem' }}>
          <Card.Body>
          <Card.Title>Give details of the faculty to be swapped with</Card.Title>
          <Form onSubmit={(e)=>add_details(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Give Faculty ID</Form.Label>
            <Form.Control type="text" placeholder="faculty id" id="facid"/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Allotment date</Form.Label>
            <Form.Control type="date" placeholder="date" id="date_s" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Allotment time</Form.Label>
            <Form.Control type="time" placeholder="time" id="time_s" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Allotment classroom</Form.Label>
            <Form.Control type="text" placeholder="classroom" id="class_s" />
          </Form.Group>
          <Card.Title>Give your allotment details</Card.Title>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Allotment date</Form.Label>
            <Form.Control type="date" placeholder="date" id="date" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Allotment time</Form.Label>
            <Form.Control type="time" placeholder="time" id="time" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Allotment classroom</Form.Label>
            <Form.Control type="text" placeholder="classroom" id="class" />
          </Form.Group>
          <Button variant="primary" type="submit" value="Submit" id="Allot">Allot</Button>
          </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
    </span>
  );
}

export default App;
