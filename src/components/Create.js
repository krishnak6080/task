import React, { useState } from 'react' 
import "./page.css";
import { Button, Form } from 'react-bootstrap' 
// import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
  
function Create() {
  
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
  
    let history = useNavigate();
  
    const handelSubmit = (e) =>{
        e.preventDefault();  
  
        const ids = uuid() 
        let uni = ids.slice(0,8) 
  
        let a = name, b=email
        array.push({id:uni,Name:a,Email:b})
  
       history('/')
         
    }
  
  return (
    <div >
        <Form className="d-grid gap-2" style={{margin:'15rem'}}>
  
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control onChange={e => setname(e.target.value)} 
                  type="text"
                  placeholder="Enter Name" required/> 
  </Form.Group>
  
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control onChange={e => setemail(e.target.value)} 
                  type="text"
                  placeholder="Email" required/>
  </Form.Group>
  
  <Button className="btn-submit"
  onClick={e => handelSubmit(e)}
    variant="primary" type="submit">
    Submit
  </Button>
  
  <Link className="d-grid gap-2" to='/'>
    <Button className="btn-home" variant="info" size="lg">
      Home
    </Button>
  </Link>
  
</Form>
    </div>
  )
}
  
export default Create