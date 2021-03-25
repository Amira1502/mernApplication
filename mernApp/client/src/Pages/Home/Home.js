import React from 'react'
// import toggleAdd
import {toggleAdd} from "../../JS/actions/edit"
// import link
import { Link } from 'react-router-dom'
// import dispatch
import {useDispatch} from "react-redux"
//import css
import {Button} from "@material-ui/core"
import  './Home.css'

const Home = () => {
    // useDispatch 
  const dispatch= useDispatch()
    return (
        <div className="content">
            <h2>Welcome Home</h2>
            <div className="btn">
                
            <Link to="/add">
            <Button variant="contained" color="secondary" onClick={()=>dispatch(toggleAdd())} > Add Contact</Button>
            </Link>

            <Link to="/contacts">
            <Button variant="contained" color="secondary" > Contact List</Button>
            </Link>
            </div>
           
           
        </div>
    )
}

export default Home
