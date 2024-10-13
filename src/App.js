import React, {useState} from "react";
import NavBar from "./Components/NavBar";
import VehicleMaintenanceLog from "./Components/VehicleMaintenanceLog";
import './App.css';
import Dashboard from "./Components/Home";

function App(){
  const [currentView, setCurrentView] = useState('dashboard');

  function handleNavigation(event) {
    setCurrentView(event);
  }

  return(
    <div>
        <NavBar onNavigation={handleNavigation}/>
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'form' && (
          <VehicleMaintenanceLog onSubmissionSuccess={() => setCurrentView('dashboard')} />
        )}
    </div>
  );
}

export default App;