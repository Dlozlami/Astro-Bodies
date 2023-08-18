import React, { useState } from "react";
import "./App.css"; // You can define your CSS for styling here

function App() {
  const [fullName, setFullName] = useState("");
  const [dob, setDOB] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleDOBChange = (event) => {
    setDOB(event.target.value);
  };

  return (
    <div className="app-container">
      <div className="panel">
        <h1>Welcome to AstroBodies!</h1>
        <p>Lets start with your personal details to draw your chart.</p>

        <div className="input-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            style={{ padding: "10px" }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={handleDOBChange}
            style={{ padding: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
