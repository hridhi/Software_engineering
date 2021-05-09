import { Form,Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../firebase';
import { useState,useEffect } from 'react';
import './exam_slot_assigning.css';

function App() {
  const db = firebase.firestore();
  const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
  const [Faculty_id,setFaculty_id]=useState([]);//database
  const [ClassName,setClassName]=useState([]);
  const [Details,setDetails]=useState([]);
  const [Fac_id,setFacID]=useState([]);
  const [Date,setDate]=useState([]);
  const [Time,setTime]=useState([]);
  useEffect(() =>{
    db.collection('ClassRoom').onSnapshot(snapshot =>{
      setClassName(snapshot.docs.map(doc => doc.data().ClassNumber))
    })
    db.collection('FacultyDetails').onSnapshot(snapshot =>{
      setFaculty_id(snapshot.docs.map(doc => doc.data().ID))
    })
    db.collection('Allotments').onSnapshot(snapshot =>{
      setDetails(snapshot.docs.map(doc => doc.data().ClassRoom))
      setFacID(snapshot.docs.map(doc => doc.data().FacultyID))
      setDate(snapshot.docs.map(doc => doc.data().AllotmentD))
      setTime(snapshot.docs.map(doc => doc.data().AllotmentT))
    })
  },[]);

  console.log(Fac_id);
  function validity(req,inside){
    var i=0;
    
    for(i=0;i<inside.length;i++){
      if(inside[i]==req){
        return 1
      }
      }
      return 0 
    }
  function getdetails(fac_id,clas,date,time){
    var i=0;
    for(i=0;i<Fac_id.length;i++){
      if(Fac_id[i]==fac_id){
        //a.push(Details[i])
        if (Details[i]==clas){
          if(Date[i]==date){
            if(Time[i]==time){
              return 0
            }
          }
        }
      }
    }
    return 1
  }
  function add_details(e){
    e.preventDefault();
    let request =  {
        Faculty_id:document.getElementById('facid').value,
        date:document.getElementById('date').value,
        time:document.getElementById('time').value,
        class:document.getElementById('class').value,
    }
    //check date and time according to the exam schedule --sprint2 
    //validity 
    var t=0
    if(validity(request.class,ClassName)){
    }
    else{
      alert('Wrong Credentials!!')
      t=1
    }
    if(validity(request.Faculty_id,Faculty_id)){
    }
    else{
      if (t==0){
        t=1
      alert('Wrong Credentials!!')
    }
  }
  //faculty id commintment 
  if (getdetails(request.Faculty_id,request.class,request.date,request.time)){
  }
  else{
    if (t==0){
      t=1
      alert('Wrong Credentials!!')
    }
  }
  if (t==1){
}
else{
  db.collection("Allotments").doc().set({
    AllotmentT:request.time,
    AllotmentD:request.date,
    ClassRoom:request.class,
    FacultyID:request.Faculty_id
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
var noti= "You are allocated to classroom number: "+request.class+" at time: "+request.time+" on date: "+request.date
db.collection("FacultyDetails").doc(request.Faculty_id).update({
  notify: arrayUnion(noti),
})
  .then(function () {
      console.log("Document successfully updated!");
  }).catch(function (error) {
      console.error("Error removing document: ", error);

  });
  alert("succesfull alloted")
// var allot="AllotmentD: "+request.date+" AllotmentT: "+request.time+" Classroom: "+request.class
// db.collection("FacultyDetails").doc(request.Faculty_id).update({
//   Allotments: arrayUnion(noti),
// })
//   .then(function () {
//       console.log("Document successfully updated!");
//   }).catch(function (error) {
//       console.error("Error removing document: ", error);

//   });
}
//.add_details(request.time);
}
  return (
    <span>
   <div className="rrt">
        <Button variant="primary" href="/ahome" className="ff" id="Home">Home</Button>
       <div className="amrita">
       <Card border="dark" style={{ width: '30rem' }}>
          <Card.Body>
          <Card.Title>Alloting Details</Card.Title>
          <Form onSubmit={(e)=>add_details(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Give faculty ID</Form.Label>
            <Form.Control type="text" placeholder="faculty id" id="facid"/>
          </Form.Group>
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
