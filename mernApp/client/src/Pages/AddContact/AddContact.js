// import package 
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {editContact, postContact} from "../../JS/actions/contact"
// import css
import {Form, Button} from "react-bootstrap"
import './AddContact.css'

const AddContactt = (history) => {
    const [contact, setContact] = useState({})
   
    // useSelector
    const x =useSelector(state => state.contactReducer.contact);
    const edit=useSelector(state => state.EditReducer.edit);
console.log(editContact)
    const dispatch = useDispatch()
    // useEffect
    useEffect(() => {
edit?
 setContact(x) : 
setContact({name:"", email:"", phone:""})},[x, edit]);

// handleChange
    const handleChange = (e) => {
      e.preventDefault();
      edit
      ? dispatch(editContact(x._id,contact)) 
      : dispatch(postContact(contact))
    }
// handleContact
    const handleContact = (e) => {
      setContact({...contact, [e.target.name]: e.target.value }) 
    }
    return (
        <div>
           <h2>{edit ? "Edit contact":"Add Contact"}</h2>
           <Form className="form">
           <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control value={contact.name} name="name" placeholder="Enter name" 
    onChange={handleContact}  />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email" placeholder="Enter email" value={contact.email} 
    onChange={handleContact}/>
  </Form.Group>

   <Form.Group controlId="formBasicEmail">
    <Form.Label>Phone</Form.Label>
    <Form.Control name="phone" placeholder="Enter phone" value={contact.phone} 
    onChange={handleContact}/>
  </Form.Group>
  <Button variant="primary" type="submit"
    onClick={(e) =>
     { handleChange(e); 
     } }>  
   {edit ? "edit" : "add"}
  </Button>
</Form>
        </div>
    
    )
}

export default AddContactt
