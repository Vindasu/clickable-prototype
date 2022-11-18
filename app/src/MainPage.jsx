import './App.css';
import React from 'react';
import Nav from './Nav';

function MainPage() {  

    
return (
    <>
    <div>
    <Nav/>
    </div>
    <div className="px-5 py-5 my-5 text-center">
        
        <div className="container-sm">
    <div className="col-lg-3 mx-auto">
    </div>
        <p className="lead mb-4 text-white fw-bold fs-1 py-4" >
        A react application designed to gather student feedback metrics.
        </p>  
        <p className="lead mb-4 text-light fw-semibold fs-2" >
        Navbar contains the options
        </p>  
    </div>
    </div>
    </>
);
}
console.log("Enjoy!")
export default MainPage;