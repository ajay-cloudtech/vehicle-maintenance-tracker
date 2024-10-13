import React from 'react';

function NavBar({ onAddRecordClick }){
    return(
        <nav id = 'navBar'>
            <h1 id = 'navHeading'> Vehicle Maintenance Tracker </h1>
            <div id = 'navListDiv'>
                <ul id = 'navList'>
                    <li> <a href = "#Home" >Home </a></li>
                    <li> <a href = "#Add Record" onClick={onAddRecordClick}>Add Record</a></li>
                    <li> <a href = "#Fuel Tracker" >Fuel Tracker</a></li>
                </ul>
            </div>
        </nav>        
    );
}

export default NavBar;