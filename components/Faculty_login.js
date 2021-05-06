
import './Faculty_login.css';
import { Form,Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import {db} from '../firebase';
import firebase from '../firebase';
import UserProfile from "./UserProfile";

function App() {
  const [email,setEmail]=useState([]);//database
  const [password,setPassword]=useState([]);//database
  var i;
  var count=0;
  var count1=1;
  useEffect(() =>{
    db.collection('FacultyDetails').onSnapshot(snapshot =>{
      setEmail(snapshot.docs.map(doc => doc.data().Email))
      setPassword(snapshot.docs.map(doc => doc.data().Password))
    })
  },[]);
  console.log(email[0]);

  

  function submit_login(e){
    e.preventDefault();
    let request =  {
        username:document.getElementById('uname').value,
        pass:document.getElementById('pwd').value,
    }
    for(i=0;i<email.length;i++){
      if(email[i]==request.username && password[i]==request.pass){
        var email_n=request.username
        console.log(email_n)
        db.collection("Extra").doc("King").update({
          email : email_n,
      }).then(function () {
        console.log("Document successfully updated!");
        window.location.replace('/fhome');
      }).catch(function (error) {
          console.error("Error removing document: ", error);
      });
        count=0;
        break;
      }
      else{
        count=1;
        }
      }
      if(count==0){
      }
      else{
      if(count1<3){
        alert('Wrong credentials!!​');
        count1=count1+1
      }
      else if(count1==3){
        alert('You have only one attempt left !!​');
        count1=count1+1
      }
      else{
        window.location.replace('/');
      }
    }
    }

  const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(googleProvider).then((res) => {
      var token =res.credential.accessToken;
      var user = res.user;
      firebase.auth().onAuthStateChanged(function(user){
        if(user){
          for(i=0;i<email.length;i++){
          if(user.email==email[i]){
            window.location.replace('/fhome');
            count=0;
            break;
          }
          else{
            count=1;
          }
          //skskdh06@gmail.com
          //admin_Amrita06 
        }
        if (count==1){
        alert('Wrong credentials!!​');
      }}
        else{
          console.log("not user")
        }
      });
    }).catch((error) => {
      console.log(error.message)
    })
  }

  return (
    <span>
   <div className="Login">
        <Button variant="primary" href="/" className="rat">Home</Button>
       <div className="Guns">
       <Card border="dark" style={{ width: '30rem' }}>
          <Card.Body>
          <Card.Title>Faculty LOGIN</Card.Title>
          <Form id="login-patient" onSubmit={(e)=>submit_login(e)} >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" id="uname"/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" id="pwd" />
          </Form.Group>
          <Form.Group>
          <Button className="login-provider-button" onClick={signInWithGoogle} id="google">
                  <span> Continue with Google</span>
               </Button>
               </Form.Group>
          <Button variant="primary" type="submit" value="Submit" id="Submit">Submit</Button>
          <Card.Link href="/forget" className="llink" id="forget">Forgot password</Card.Link>
          </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
    </span>
  );
}

export default App;
