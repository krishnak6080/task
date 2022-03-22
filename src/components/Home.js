import React from 'react'
import "./page.css"
import { Button,Table } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import array from './array'; 
import { Link, useNavigate } from 'react-router-dom';
  
function Home() {
  
  let history = useNavigate()
  
  function setID(id,name,email){
    localStorage.setItem('id', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
  }
  
  function deleted(id){
      
    var index = array.map(function(e) { return e.id; }).indexOf(id);
  
    array.splice(index,1)
  
    history('/')
  }
  
  return (
    <div  style={{margin:'10rem'}}>
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  
    {array.map((item) => {
return(
<tr>
      <td>{item.Name}</td>
      <td>{item.Name}</td>
      <td>{item.Email}</td>
        
      <td><Link to={`/edit`}><Button className="btn-update" onClick={(e) =>
      setID(item.id,item.Name,item.Email)} variant="info">
        Update</Button></Link>
  
      <Button className="btn-delete" onClick={e => deleted(item.id)} 
      variant="danger">Delete</Button>
      
      <button type="submit" className="btn-view">view</button>

      </td>
    </tr>
)})}
  </tbody>
</Table>
  
<Link className="d-grid gap-2" to='/create'>
  <Button variant="warning" size="lg" className="btn-add-employee">Add Employee</Button>
</Link>
    </div>
  )
}
  
export default Home