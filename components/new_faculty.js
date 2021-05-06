import { Form,Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import { useState,useEffect } from 'react';

function App() {
    const db = firebase.firestore();
    const [Faculty_id,setFaculty_id]=useState([]);
    useEffect(() =>{
        db.collection('FacultyDetails').onSnapshot(snapshot =>{
          setFaculty_id(snapshot.docs.map(doc => doc.data().ID))
        })
      },[]);
      function validity(id){
          for(var i=0;i<Faculty_id.length;i++){
              if(id==Faculty_id[i]){
                  return 0
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
        var t=0;
        if(validity(request.Faculty_id)){
        }
        else{
            alert('Wrong Credentials!!')
            t=1
          }
        if(t==1){}
        else{
            db.collection("FacultyDetails").doc().set({
                Email:request.date,
                ID:request.Faculty_id,
                Password:request.time,
                Security:request.class
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        db.collection("FacultyDetails").doc(request.Faculty_id).set({
      })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
      
        alert('Registered succesfully')
        }

    }
    return(
        <div>
            <Link to="/ahome"><Button variant="primary" id="Home">Home</Button></Link>
            <div className="amrita">
       <Card border="dark" style={{ width: '30rem' }}>
          <Card.Body>
          <Card.Title>New faculty registeration</Card.Title>
          <Form onSubmit={(e)=>add_details(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Faculty ID</Form.Label>
            <Form.Control type="text" placeholder="faculty id" id="facid"/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Faculty mail</Form.Label>
            <Form.Control type="email" placeholder="date" id="date" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="data" placeholder="time" id="time" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Security question</Form.Label>
            <Form.Control type="text" placeholder="classroom" id="class" />
          </Form.Group>
          <Button variant="primary" type="submit" value="Submit" id="Allot">Allot</Button>
          </Form>
          </Card.Body>
        </Card>
      </div>
        </div>
    )
}
export default App;