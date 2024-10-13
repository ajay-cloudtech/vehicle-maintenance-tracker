import React, {useState} from "react";
import NavBar from "./Components/NavBar";
import onAddRecordClick from "./Components/AddRecordClick";
import VehicleMaintenanceLog from "./Components/VehicleMaintenanceLog";
import './App.css';

function App(){
  const [showForm, setShowForm] = useState(false);

  function handleAddRecordClick(event) {
    onAddRecordClick(event, showForm, setShowForm); 
  }

  return(
    <div>
      <NavBar onAddRecordClick={handleAddRecordClick}/>
      {showForm && <VehicleMaintenanceLog />}

    </div>
  );
}

export default App;