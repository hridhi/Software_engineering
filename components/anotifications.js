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
    const [notif,setnotif]=useState([]);
    useEffect(() =>{
        db.collection('AdminDetails').onSnapshot(snapshot =>{
          setnotif(snapshot.docs[0].data().Notifications)
        })
      })
      console.log(notif)
      function succ(mess){
        const facc = mess.substring(8,12);
        const msg="Your request for swapping allotment with "+mess.substring(51,55)+" is underprocess! "
        db.collection("FacultyDetails").doc(facc).update({
            notify: arrayUnion(msg),
          })
            .then(function () {
                console.log("Document successfully updated!");
            }).catch(function (error) {
                console.error("Error removing document: ", error);
          
            });
        // const facc2 = mess.substring(51,55);
        // const msg2="Your allotment is swapped with "+mess.substring(8,12)+" !"
        // db.collection("FacultyDetails").doc(facc2).update({
        //     notify: arrayUnion(msg2),
        //     })
        //     .then(function () {
        //         console.log("Document successfully updated!");
        //     }).catch(function (error) {
        //         console.error("Error removing document: ", error);  
        //     });
        window.location.replace("/alalter");
        alert("Accepted and notification sent !!");
      }
      function noo(mess){
        const facc = mess.substring(8,12);
        const msg="Your request for swapping allotment with "+mess.substring(51,55)+" is rejected! "
        //alert(msg)
        db.collection("FacultyDetails").doc(facc).update({
            notify: arrayUnion(msg),
          })
            .then(function () {
                console.log("Document successfully updated!");
            }).catch(function (error) {
                console.error("Error removing document: ", error);
          
            });
        alert("Rejected and notification sent !!");
    }
      function add_details(msg){
    //       var ref=db.collection('AdminDetails').document("A0P2D17LNR5SqSMM0UVc")
    //       ref.update("Notifications",db.FieldValue.arrayRemove(msg))
        db.collection("AdminDetails").doc("A0P2D17LNR5SqSMMoUVc").update({
            Notifications: arrayRemove(msg),
        }).then(function () {
            console.log("Document successfully updated!");
        }).catch(function (error) {
            console.error("Error removing")
        })
        alert("succesfully deleted!!")
    }
    return(
        <span>
        <div className="rrt">
            <Button variant="primary" href="/ahome" className="ff" id="Home">Home</Button>
        <div className="uut">
        {notif.map((row,index) => {
            console.log(row)
            return (
                
            <Accordion defaultActiveKey="1">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Alteration request {index+1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>{row}
                <br></br><br></br>
                <Button variant="success" onClick={() => succ(row)}>Accept</Button>&nbsp;
                <Button variant="danger" onClick={() => noo(row)}>Decline</Button>&nbsp;
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
