import { Form,Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import './exam_slot_assigning.css';
import { useState,useEffect } from 'react';
function App() {
  const db = firebase.firestore();
  const [data,setData]=useState([]);
  useEffect(() =>{
    db.collection('Allotments').onSnapshot(snapshot =>{
      setData(snapshot.docs.map(doc => doc.data()))
    })
    
  })
  function changee(date,time,room,id,swapid){
    db.collection('Allotments').get().then(snapshot => {
      snapshot.docs.forEach(data =>{
        if (date==data.AllotmentD & time==data.AllotmnetT & room==data.ClassRoom & id==data.FacultyID ){
          console.log("entered")
          data.FacultyID=swapid
        }
      })
    }
    )
  }
  console.log(data);
  function add_details(e){
    e.preventDefault();
    let request =  {
        Faculty_id:document.getElementById('facid').value,
        date_s:document.getElementById('date_s').value,
        date:document.getElementById('date').value,
        time:document.getElementById('time').value,
        class:document.getElementById('class').value,
        time_s:document.getElementById('time_s').value,
        Faculty_id2:document.getElementById('facid2').value,
        class_s:document.getElementById('class_s').value,
    }
    //second feild checking 
    if(request.date & request.time & request.class ){
      changee(request.date_s,request.time_s,request.class_s,request.Faculty_id2)
      changee(request.date,request.time,request.class,request.Faculty_id)
      alert("Donee!!")
    }
    else{
      // db.collection('Allotments').where("AllotmentD", "==", request.date_s).get().then(querySnapshot => {
      //   querySnapshot.forEach(doc => 
      //     doc.update({
      //       "ID": request.facid2
      //     })
      // )})
      // }

    //   db.collection('Allotments').where('AllotmentD', '==', request.date_s).update({
    //     ID: request.facid2,
    // }).then(function () {
    //   console.log("Document successfully updated!");
    // }).catch(function (error) {
    //     console.error("Error removing document: ", error);
    // });
    changee(request.date_s,request.time_s,request.class_s,request.Faculty_id2)
    alert('Done!!')
  }
}
  return (
   <div className='rrt'>
        <Link to="/ahome"><Button variant="primary" className='ff'>Home</Button></Link>
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
          <Card.Title>Give the other faculty details</Card.Title>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Give Faculty ID</Form.Label>
            <Form.Control type="text" placeholder="faculty id" id="facid2"/>
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
          <Button variant="primary" type="submit" value="Submit" id="Allot">Swap</Button>
          </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
