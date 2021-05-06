import {Button,Card,Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../firebase';
import { useState,useEffect } from 'react';
import './exam_slot_assigning.css';
import './anotifications.css';
function App() {
    const db = firebase.firestore();
    const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
    const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
    const [email,setEmail]=useState([]);
    const [D2,setD2]=useState([]);
    //const [result,setResult]=useState([]);
    
    useEffect(() =>{
        db.collection('Extra').onSnapshot(snapshot =>{
            setEmail(snapshot.docs.map(doc => doc.data().email))
          })
        db.collection('FacultyDetails').onSnapshot(snapshot =>{
            setD2(snapshot.docs.map(doc => doc.data()))
          })
      })
      //console.log(D2);
    const ee=email[0];
    var facid;
    var result=["hell0"]
    function movve(){
        for (var j=0;j<D2.length;j++){
        
            if (ee==D2[j].Email){
              //console.log(D2[j].Email);
              //console.log(D2[j].ID);
              facid=D2[j].ID;
              result=D2[j].notify;
                break;
            }
        }
    }
    
      function add_details(msg){
        db.collection("FacultyDetails").doc(facid).update({
            notify: arrayRemove(msg),
        }).then(function () {
            console.log("Document successfully updated!");
        }).catch(function (error) {
            console.error("Error removing")
        })
        alert("succesfully deleted!!")
    }
    movve();
    return(
        <span>
        <div className="rrt">
            <Button variant="primary" href="/fhome" className="ff" id="Home">Home</Button>
        <div className="uut">
        {result.map((row,index) => {
            //console.log(row)
            return (
                
            <Accordion defaultActiveKey="1">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Notification  {index+1}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>{row}
                <br></br><br></br>
                <Button variant="danger" onClick={()=>add_details(row)}>Delete</Button>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>)
        })
        }  
        </div>
        </div>
        </span>

    )
}
export default App;
