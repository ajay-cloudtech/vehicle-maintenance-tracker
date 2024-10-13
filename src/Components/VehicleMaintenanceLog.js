import React, {useState} from "react";

function VehicleMaintenanceLog({ onSubmissionSuccess }){

    const [formData, setFormData] = useState({
        vehicleName: "",
        vehicleModel: "",
        maintenanceDate: "",
        maintenanceType: "",
        trip: 0,
    });

    const handleSubmit = function(event){
        event.preventDefault();
        const apiUrl = window.location.origin.includes('localhost')
        ? 'http://localhost:5000/add_record'
        : `${window.location.origin}/add_record`;
        fetch(apiUrl, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            window.alert("Record added successfully!"); 
            onSubmissionSuccess();
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }

    const handleChange = function(e){
        const { name, value, type } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    return(
        <div id = 'vehicleMaintenanceDiv'>
            <h2 id = 'maintenanceHeading'>Vehicle Maintenance Log</h2>

            <form id = 'maintenanceForm' onSubmit={handleSubmit}>
                {/*Vehicle Name*/}
                <label htmlFor="vehicleName">Vehicle Name</label>
                <input 
                    id = 'vehicleName' 
                    name='vehicleName' 
                    type ='text' 
                    value={formData.vehicleName}
                    onChange={handleChange} 
                    required
                />

                <label htmlFor="vehicleModel">Vehicle Model</label>
                <input 
                id = 'vehicleModel'
                name='vehicleModel'
                type ='text'
                value={formData.vehicleModel} 
                onChange={handleChange} 
                required
                />

                <label htmlFor="maintenanceDate">Maintenance Date</label>
                <input 
                    id = 'maintenanceDate' 
                    name='maintenanceDate'
                    type ='date'
                    value={formData.maintenanceDate} 
                    onChange={handleChange} 
                    required
                />

                <label htmlFor="maintenanceType">Maintenance Type</label>
                <select 
                    id = 'maintenanceType' 
                    name='maintenanceType'
                    value={formData.maintenanceType}
                    onChange={handleChange}
                    required
                >
                    <option value =''>Select</option>
                    <option value ='engine-check'>Engine Check</option>
                    <option value ='battery-replace'>Battery Replace</option>
                    <option value ='wheel-alignment'>Wheel Alignment</option>
                    <option value ='infotainment-upgrade'>Infotainment Upgrade</option>
                    <option value ='tire-change'>Tire Change</option>
                </select>

                <label htmlFor="trip">Trip (in Kms) at time of service</label>
                <input 
                    id = 'trip' 
                    name = 'trip'
                    type ='number'
                    value={formData.trip}
                    onChange={handleChange} 
                    required
                />
                
                <button id = 'maintenanceButton' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default VehicleMaintenanceLog;