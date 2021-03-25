import React, {useEffect} from 'react'
// import package
import {useDispatch, useSelector} from "react-redux"
import {get_contacts} from "../../JS/actions/contact"
// import component
import Contact from "../../Components/Contact/Contact"
// import spinner
import {Spinner} from 'react-bootstrap'
const ContactList = () => {
    // useSelector
    const contactList = useSelector(state => state.contactReducer.contactList)
    const loadContact = useSelector(state => state.contactReducer.loadContact)
    //useDispatch
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(get_contacts())
    }, [])
    return (
        <div>
           {
           loadContact?<Spinner animation="border" variant="danger" />: 
           contactList.map(el=>
            <Contact contact={el} key={el._id} />
          )
           } 
        </div>
    )
}

export default ContactList
