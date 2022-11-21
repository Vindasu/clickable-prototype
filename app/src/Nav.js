import { NavLink, Link } from 'react-router-dom';
import React, { useEffect, useState, useContext} from 'react';
import './App.css'


function Nav() {
    return(
        <>
            <NavLink className="navbar-brand" aria-current="page" to="/">Home</NavLink>
            <NavLink className="navbar-brand" aria-current="page" to="/numeric">Numeric Scale</NavLink>
            <NavLink className="navbar-brand" aria-current="page" to="/emoji">Emoji Faces Scale</NavLink>
            <NavLink className="navbar-brand" aria-current="page" to="/minimalist">Minimalist Scale</NavLink>
        <div className='d-flex justify-content-between text-white align-items-center'>

            </div>
        </>  
    )
    }  

export default Nav;