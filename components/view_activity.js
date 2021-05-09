import {Button,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState,useEffect} from 'react';
import firebase from '../firebase';
import './exam_slot_assigning.css';
function App() {
  const db = firebase.firestore();
  const [D,setD]=useState([]);


  useEffect(() =>{
    db.collection('Allotments').onSnapshot(snapshot =>{
      setD(snapshot.docs.map(doc => doc.data()))
    })
  },[]);

  return (
    <span>
   <div>
        <Button variant="primary" className="ff" id="Home" to="fhome">Home</Button>
        <br></br><br></br>
        <h1>Allotment Details</h1>
        <br></br>
        <div classname="exam" id="ExamSchedules">
  <Table striped bordered hover variant="dark" id="table">
  <thead>
    <tr>
      <th>Serial Number</th>
      <th>Allotment Date</th>
      <th>Allotment time</th>
      <th>ClassRoom</th>
      <th>FacultyID</th>
    </tr>
  </thead>
  <tbody>
  {D.map((row,index) => {
    const {AllotmentD,AllotmentT,ClassRoom,FacultyID} = row
    return (
      <tr>
        <td>{index+1}</td>
        <td>{AllotmentD}</td>
        <td>{AllotmentT}</td>
        <td>{ClassRoom}</td>
        <td>{FacultyID}</td>
      </tr>)})}
  </tbody>
</Table><br></br><br></br>
</div></div>
</span>
  );
}

export default App;
