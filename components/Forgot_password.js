import React from 'react';
import "./Forgot_password.css";
import { useState,useEffect } from 'react';
import {db} from '../firebase';

import { Form,Button} from 'react-bootstrap';

export default function ForgetPassword() {
   
  const [email,setEmail]=useState([]);//database
  const [security,setSecurity]=useState([]);//database
  const [docid,setDocid]=useState([]);
   var i;
   var id;
  var target ;
  useEffect(() =>{
    db.collection('FacultyDetails').onSnapshot(snapshot =>{
      setEmail(snapshot.docs.map(doc => doc.data().Email))
    })
    db.collection('FacultyDetails').onSnapshot(snapshot =>{
      setSecurity(snapshot.docs.map(doc => doc.data().Security))
    })
    db.collection('FacultyDetails').onSnapshot(snapshot =>{
      setDocid(snapshot.docs.map(doc => doc.id))
    })
  },[]);
  console.log(docid[0]);


  function submit_mail(e){
    e.preventDefault();
    let request =  {
        username:document.getElementById('email').value,
    }
    for(i=0;i<email.length;i++){
    if(email[i]==request.username ){
      target=i;
      id=docid[i];
      alert('Security Question : who is your favourite hero​');
      if(security[i]==request.security ){
        alert('Success!!. Please enter new password');
      }
        
    //   window.location.replace('/ahome');
      break;
    }
    else{
      console.log("failure");
    }
  }
  
  }

  function submit_security(e){
    e.preventDefault();
    let request =  {
        username:document.getElementById('security').value,
    }
    

    if(security[target]==request.username ){

      db.collection('FacultyDetails').doc()

        alert('Success!!. Please enter new password');

      }
        
      
    
    else{
      console.log("failure");
    }
  
  
  }


  function submit_pass(e){
    e.preventDefault();
    let request =  {
        password:document.getElementById('pass').value,
        confirm:document.getElementById('confirm').value,
    }
    if(request.password == request.confirm){
      alert('successfully updated your password');
     //updation of password 
     var washingtonRef = db.collection("FacultyDetails").doc(id);
     return washingtonRef.update({
         Password: request.password
     })
  
    }
    else{
      console.log("failure");
    }
  }



    return (
      <span>
        <div className="forget">
          <Button variant="primary" href="/flogin"className="bbut" id="Home">Home</Button>
   <Form inline onSubmit={(e)=>submit_mail(e)}>
  
  <Form.Control
    className="mb-2 mr-2 "
    id="email"
    placeholder="Enter email ID"
    type="email"
  />
  <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
    Username
  </Form.Label>
  
  <Button type="submit" className="mb-2 ml-2" variant="primary" type="submit" value="Submit"id="Submit">
    Submit
  </Button>



  
     
</Form>
<Form inline onSubmit={(e)=>submit_security(e)} >
  <Form.Control
    className="mb-2  mr-2 "
    id="security"
    placeholder="answer for security"
    type="text"
  />
  <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
    Username
  </Form.Label>
  
  <Button className="mb-2 ml-2" variant="primary" type="submit" value="security" id="verify">
    Verify
  </Button>

</Form>

  <hr/>
<Form  onSubmit={(e)=>submit_pass(e)}
   >
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>New Password</Form.Label>
    <Form.Control type="password"  id ="pass" placeholder="enter new password" />
  </Form.Group>

   <Form.Label>Confirm password</Form.Label>
  <Form.Control
    className="mb-2 mr-sm-2 "
    id="confirm"
    placeholder="Re-enter password"
    type="password"
  />

    <Button variant="success" type="submit" value = "submit" className="mb-2 mt-3 ml-20" id="change">Change Password</Button>{' '}


  </Form>

  
  

    </div>
    </span>
    )
}

