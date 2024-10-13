import React from "react";

function VehicleMaintenanceLog(){

  

    return(
        <div id = 'vehicleMaintenanceDiv'>
            <h2 id = 'maintenanceHeading'>Vehicle Maintenance Log</h2>

            <form id = 'maintenanceForm'>
                {/*Vehicle Name*/}
                <label htmlFor="vehicalName">Vehicle Name</label>
                <input id = 'vehicalName' type ='text' required/>

                <label htmlFor="vehicalModel">Vehicle Model</label>
                <input id = 'vehicalModel' type ='text' required/>

                <label htmlFor="maintenanceDate">Maintenance Date</label>
                <input id = 'maintenanceDate' type ='date' required/>

                <label htmlFor="maintenanceType">Maintenance Type</label>
                <select>
                    <option value =''>Select</option>
                    <option value ='engine-check'>Engine Check</option>
                    <option value ='battery-replace'>Battery Replace</option>
                    <option value ='wheel-alignment'>Wheel Alignment</option>
                    <option value ='infotainment-upgrade'>Infotainment Upgrade</option>
                    <option value ='tire-change'>Tire Change</option>
                </select>

                <label htmlFor="trip">Trip (in Kms) at time of service</label>
                <input id = 'trip' type ='number' required/>
                
                <button id = 'maintenanceButton' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default VehicleMaintenanceLog;