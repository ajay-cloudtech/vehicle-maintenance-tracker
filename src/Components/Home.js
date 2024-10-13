import React, { useEffect, useState } from "react";

function Dashboard(){
    const [records, setRecords] = useState([]);

    useEffect(() => {        
        fetch("https://vehicle-maintenance-tracker-2d5f373a4199.herokuapp.com/get_records")
            .then((response) => response.json())
            .then((data) => {
                setRecords(data); // Store the fetched records in state
            })
            .catch((error) => {
                console.error("Error fetching records:", error);
            });
    }, []);
    return (
        <div id="dashboard">
            
            {records.length === 0 ? (
                <p>No records found.</p>
            ) : (
                <table border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Vehicle Name</th>
                            <th>Vehicle Model</th>
                            <th>Maintenance Date</th>
                            <th>Maintenance Type</th>
                            <th>Trip (in Kms)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => (
                            <tr key={index}>
                                <td>{record.vehicleName}</td>
                                <td>{record.vehicleModel}</td>
                                <td>{record.maintenanceDate}</td>
                                <td>{record.maintenanceType}</td>
                                <td>{record.trip}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Dashboard;