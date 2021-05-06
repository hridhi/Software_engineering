import React from 'react'
import {Form,Badge,Button} from 'react-bootstrap';
import {db} from '../firebase';
import './Forgot_password.css';
function Feedback(){
    function success(e){
        e.preventDefault();
        let request =  {
          text:document.getElementById('feedback').value,
      }

        // console.log(db.collection('Feedback').add());
        db.collection("Feedback").doc().set({
          feedback:request.text
      })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
      
    }


    return (
      <span>
        <div className="hut" >

<Button variant="primary" href="/fhome" className="but align-right" id="Home" >Home</Button>

            <Form  onSubmit={success}>
                <Form.Label className="m-20" >
                    <h1 >
    <Badge   variant="secondary">FEEDBACK FORM</Badge>
  </h1>
                </Form.Label>
                
  <Form.Group controlId="formBasicEmail">
    <Form.Label  ><h2>Give your feedback </h2> </Form.Label>


    <Form.Control className="bg-dark text-light" as="textarea" rows={5} id="feedback" name="feedback" />
    {/* <Form.Control type="text" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  {/* <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="primary" type="submit" value="Submit" id="Submit">
    Submit
  </Button>
</Form>

        </div>
        </span>
    );

}

export default Feedback;