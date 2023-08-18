import React, { useState } from "react";
import "./App.css"; // You can define your CSS for styling here

function App() {
  const [fullName, setFullName] = useState("");
  const [dob, setDOB] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [biologicalSex, setBiologicalSex] = useState("Male");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleDOBChange = (event) => {
    setDOB(event.target.value);
  };

  const handlePlaceOfBirthChange = (event) => {
    setPlaceOfBirth(event.target.value);
  };

  const handleBiologicalSexChange = (event) => {
    setBiologicalSex(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", fullName, dob, placeOfBirth, biologicalSex);
  };

  const handleReset = () => {
    setFullName("");
    setDOB("");
    setPlaceOfBirth("");
    setBiologicalSex("Male");
  };

  return (
    <div className="app-container">
      <div className="panel">
        <h1>Welcome to AstroBodies! MAIN</h1>
        <p>Let's start with your personal details to draw your chart.</p>

        <form onSubmit={handleSubmit} className="form">
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

          <div className="input-group">
            <label htmlFor="placeOfBirth">Place of Birth</label>
            <input
              type="text"
              id="placeOfBirth"
              value={placeOfBirth}
              onChange={handlePlaceOfBirthChange}
              style={{ padding: "10px" }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="biologicalSex">Biological Sex</label>
            <select
              id="biologicalSex"
              value={biologicalSex}
              onChange={handleBiologicalSexChange}
              style={{ padding: "10px" }}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Intersex">Intersex</option>
            </select>
          </div>

          <button
            type="submit"
            className="buttonStyles"
            style={{ marginRight: 20 }}
          >
            Submit
          </button>
          <button type="button" className="buttonStyles" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
