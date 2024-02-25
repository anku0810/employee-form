import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Style.css";

const Home = () => {
  const initialFormData = {
    id: "",
    name: "",
    id_number: "",
    department: "",
    dob: "",
    gender: "",
    designation: "",
    salary: "",
    email: "",
    Age: "",
    bloodgroup: "",
    native: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    const requiredFields = [
      "id",
      "name",
      "id_number",
      "department",
      "dob",
      "gender",
      "designation",
      "salary",
    ];
    const filledFields = requiredFields.every(
      (field) => formData[field] !== ""
    );
    if (filledFields) {
      setCurrentStep(currentStep + 1);
    } else {
      toast.error("Please fill in all fields before proceeding.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      axios.post("https://employee-form-9.onrender.com/submit-form", formData);
      toast.success("Employee data submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error occurred while submitting data");
    }
  };

  const handleClear = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <label>
              ID:
              <input
                type="number"
                name="id"
                placeholder="Enter id:"
                value={formData.id}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>
            <label>
              Employee Name:
              <input
                type="text"
                name="name"
                placeholder="Enter Employee Name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>
            <label>
              ID Number:
              <input
                type="text"
                name="id_number"
                placeholder="Enter ID Number"
                value={formData.id_number}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>
            <label>
              Department:
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="Cse">CSE</option>
                <option value="AIDS">AIDS</option>
                <option value="ECE">ECE</option>
                <option value="Mechanical">Mechanical</option>
              </select>
            </label>
            <label>
              DOB:
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>
            <label className="radio-label">
              Gender:
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  className="radio-input"
                  required
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  className="radio-input"
                  required
                />
                Female
              </label>
            </label>
            <label>
              Designation:
              <input
                type="text"
                name="designation"
                placeholder="Enter Employee Designation"
                value={formData.designation}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>
            <label>
              Salary:
              <input
                type="number"
                name="salary"
                placeholder="Enter Employee Salary"
                value={formData.salary}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>
            <button type="button" className="next-button" onClick={handleNext}>
              Next
            </button>
          </>
        );
      case 2:
        return (
          <>
            <label>
              Email:
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="Age"
                placeholder="Enter Age"
                value={formData.Age}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>
            <label>
              Blood Group:
              <select
                name="bloodgroup"
                value={formData.bloodgroup}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </label>
            <label>
  Native:
  <select
    name="native"
    value={formData.native}
    onChange={handleChange}
    className="input-field"
    required
  >
    <option value="">Select State</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
    <option value="Chandigarh">Chandigarh</option>
    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
    <option value="Daman and Diu">Daman and Diu</option>
    <option value="Lakshadweep">Lakshadweep</option>
    <option value="Delhi">Delhi</option>
    <option value="Puducherry">Puducherry</option>
  </select>
</label>

            <button type="submit" className="submit-button">
              Submit
            </button>
            <button
              type="button"
              className="clear-button"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              type="button"
              className="prev-button"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Previous
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="fancy">Employee Details </h1>
      <form className="employee-form" onSubmit={handleSubmit}>
        {renderFormStep()}
      </form>
    </div>
  );
};

export default Home;
