import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const About = () => {
    const [user,SetUser] = useState({
Email:'',
Password:'',
    });
    let name ,value;
    const getUserData=(event)=>{
        name=event.target.name;
        value=event.target.value;
        SetUser({...user,[name]:value});

    };
    const postData=async (e)=>{
e.preventDefault();
const{Email,Password}=user;

    const res= await fetch('https://myform-e7b99-default-rtdb.firebaseio.com/myform.json',
   { method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
Email,
Password
    }),
 } 
 );
    
       
    };
    



    return (
     <>   <div>
             <h1>hellow this is about</h1>
             <Form method ='POST'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>email</Form.Label>
    <Form.Control type="email" placeholder="Enter email"      value={user.email}    onChange={getUserData}     required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="password"     value={user.password}     onChange={getUserData}    required  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit"   onClick={postData} >
    Submit
  </Button>
</Form>


        </div></>
    )
}

export default About
