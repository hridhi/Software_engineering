import {Button,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState,useEffect} from 'react';
import firebase from '../firebase';
import './exam_slot_assigning.css';
function App() {
  const db = firebase.firestore();
  const [D,setD]=useState([]);
  const [req,setReq]=useState([]);
  const [D2,setD2]=useState([]);
  //const [facid,setFacid]=useState('');
  const [email,setEmail]=useState([]);
  useEffect(() =>{
    db.collection('Allotments').onSnapshot(snapshot =>{
      setD(snapshot.docs.map(doc => doc.data()))
    })
    db.collection('FacultyDetails').onSnapshot(snapshot =>{
        setD2(snapshot.docs.map(doc => doc.data()))
      })
    db.collection('Extra').onSnapshot(snapshot =>{
        setEmail(snapshot.docs.map(doc => doc.data().email))
      })
    
  },[]);
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
    for(var j=0;j<req.length;j++){
      req.pop();
    }
    for(var i=0;i<D.length;i++){
      
        if (D[i].FacultyID==facid){
          console.log(D[i]);
            req.push(D[i]);
            
        }
    }
    const requ = Array.from(new Set(req));
  
  

  return (
    <span>
   <div>
        <Button variant="primary" className="ff" id="Home" to="/fhome">Home</Button>
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
  {requ.map((row,index) => {
    const {AllotmentD,AllotmentT,ClassRoom,FacultyID} = row
    return (
      <tr>
        <td>{index+1}</td>
        <td>{AllotmentD}</td>
        <td>{AllotmentT}</td>
        <td>{ClassRoom}</td>
        <td>{FacultyID}</td>
      </tr>
    )
  })
}
  </tbody>
</Table>
<br></br>
<br></br>
</div>
    </div>
    </span>
  );
}

export default App;
