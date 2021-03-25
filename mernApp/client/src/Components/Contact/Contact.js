import React from 'react'
// import useDispatch
import {useDispatch} from "react-redux"
// import action delete
import {deleteContact, getContact} from "../../JS/actions/contact"
// import CSS
import './Contact.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Button} from "@material-ui/core";
//
import { Link } from 'react-router-dom';
import { toggleEdit } from '../../JS/actions/edit';


const Contact = ({contact}) => {
    // dispatch
const dispatch = useDispatch()
// handleEdit
const handleEdit = (id) =>{
    dispatch(toggleEdit())
    dispatch(getContact(id))
}
    return (
        <div>

<Card className="cardList">
<CardContent>
            <h2>{contact.name}</h2>
            <h2>{contact.email}</h2>
            <h2>{contact.phone}</h2>
            <Link to="/edit">
                <Button variant="contained" color="secondary" style={{position: "relative"}} onClick={()=> handleEdit (contact._id) }>
                 Edit
                 </Button>
                 </Link>
            <Button variant="contained" color="secondary" onClick={()=>dispatch(deleteContact(contact._id))} > delete</Button>
</CardContent>
</Card>
          
        </div>
    )
}

export default Contact
