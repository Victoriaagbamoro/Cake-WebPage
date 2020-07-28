import React from 'react';
import './Navbar.css'



export default function Navbar (){
    return(
        <div>
            <div id="logo">
                {/* Cakies */}
            </div>

            <nav id="navbar">
                <ul>
                    <li>Cakes</li>
                    <li>Birthday</li>
                    <li>Anniversaries</li>
                    <li>Kids Cake</li>
                    <li>Fun Cake</li>
                    <li>Grown Up</li>
                    <li><i className="fa fa-shopping-basket"></i></li>
                </ul>
                
            </nav>
            
        </div>
    )

}