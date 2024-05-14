import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./EditForm.css";

function EditForm() {
  const [formData, setFormData] = useState({});
  const { id } = useParams(); // Get the ID from the URL params

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://onmapi.multinet.com.pk:81/customers/${id}`
      );
      const fetchedData = response.data;
      setFormData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://onmapi.multinet.com.pk:81/customers/${id}`,
        formData
      );
      console.log("Data updated successfully!");
      alert("Data updated successfully!");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="edit-form">
      <h2>Edit Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Render input fields for each form field */}
        <div className="edit-form-row">
          <label>ID :</label>
          <input
            type="text"
            name="id"
            placeholder="id"
            value={formData.id || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="edit-form-row">
          <label>Complaints Number :</label>
          <input
            type="text"
            name="complaints_number"
            placeholder="complaints_number"
            value={formData.complaints_number || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="edit-form-row">
          <label>Survey Date :</label>
          <input
            type="text"
            name="survey_date"
            placeholder="survey_date"
            value={formData.survey_date || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="edit-form-row">
          <label>Singup ID/Project ID :</label>
          <input
            type="text"
            name="signup_id"
            placeholder="signup_id"
            value={formData.signup_id || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="edit-form-row">
          <label>Node Name/Section Name :</label>
          <input
            type="text"
            name="node_name"
            placeholder="Node Name"
            value={formData.node_name || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="edit-form-row">
          <label>Joint Connectivity :</label>
          <select
            type="text"
            name="joint_connectivity"
            placeholder="joint_connectivity"
            value={formData.joint_connectivity || ""}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="Aerial">Aerial</option>

            <option value="Buried">Buried</option>
          </select>
        </div>
        <div className="edit-form-row">
          <label> In Cable Core Capacity :</label>
          <select
            type="text"
            name="in_cable_core_capacity"
            placeholder="in_cable_core_capacity"
            value={formData.in_cable_core_capacity}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="2 Core">2 Core</option>

            <option value="4 Core">4 Core</option>
            <option value="6 Core">6 Core</option>
            <option value="12 Core">12 Core</option>
            <option value="24 Core">24 Core</option>
            <option value="36 Core">36 Core</option>
            <option value="48 Core">48 Core</option>
            <option value="96 Core">96 Core</option>
          </select>
        </div>
        <div className="edit-form-row">
          <label>Out Cable Core Capacity :</label>

          <select
            type="text"
            name="out_cable_core_capacity"
            placeholder="out_cable_core_capacity"
            value={formData.out_cable_core_capacity}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="2 Core">2 Core</option>

            <option value="4 Core">4 Core</option>
            <option value="6 Core">6 Core</option>
            <option value="12 Core">12 Core</option>
            <option value="24 Core">24 Core</option>
            <option value="36 Core">36 Core</option>
            <option value="48 Core">48 Core</option>
            <option value="96 Core">96 Core</option>
          </select>
        </div>
        <div className="edit-form-row">
          <label>In Cable Tube Color :</label>

          <select
            type="text"
            name="in_cable_tube_color"
            placeholder="in_cable_tube_color"
            value={formData.in_cable_tube_color}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="Blue">Blue</option>

            <option value="Orange">Orange</option>
            <option value="Green">Green</option>
            <option value="Brown">Brown</option>
            <option value="Grey">Grey</option>
            <option value="White">White</option>
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="Yellow">Yellow</option>
            <option value="Purple">Purple</option>
            <option value="Pink">Pink</option>
            <option value="Aqua">Aqua</option>
          </select>
        </div>
        <div className="edit-form-row">
          <label>In Cable Core Color :</label>

          <select
            type="text"
            name="in_cable_core_color"
            placeholder="in_cable_core_color"
            value={formData.in_cable_core_color}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="Blue">Blue</option>

            <option value="Orange">Orange</option>
            <option value="Green">Green</option>
            <option value="Brown">Brown</option>
            <option value="Grey">Grey</option>
            <option value="White">White</option>
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="Yellow">Yellow</option>
            <option value="Purple">Purple</option>
            <option value="Pink">Pink</option>
            <option value="Aqua">Aqua</option>
          </select>
        </div>
        <div className="edit-form-row">
          <label>Out Cable Tube Color :</label>

          <select
            type="text"
            name="out_cable_tube_color"
            placeholder="out_cable_tube_color"
            value={formData.out_cable_tube_color}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="Blue">Blue</option>

            <option value="Orange">Orange</option>
            <option value="Green">Green</option>
            <option value="Brown">Brown</option>
            <option value="Grey">Grey</option>
            <option value="White">White</option>
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="Yellow">Yellow</option>
            <option value="Purple">Purple</option>
            <option value="Pink">Pink</option>
            <option value="Aqua">Aqua</option>
          </select>
        </div>
        <div className="edit-form-row">
          <label>Out Cable Core Color :</label>

          <select
            type="text"
            name="out_cable_core_color"
            placeholder="out_cable_core_color"
            value={formData.out_cable_core_color}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="Blue">Blue</option>

            <option value="Orange">Orange</option>
            <option value="Green">Green</option>
            <option value="Brown">Brown</option>
            <option value="Grey">Grey</option>
            <option value="White">White</option>
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="Yellow">Yellow</option>
            <option value="Purple">Purple</option>
            <option value="Pink">Pink</option>
            <option value="Aqua">Aqua</option>
          </select>
        </div>
        <div className="edit-form-row">
          <label>latitude :</label>
          <input
            type="text"
            name="latitude"
            placeholder="latitude"
            value={formData.latitude || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="edit-form-row">
          <label>longitude :</label>
          <input
            type="text"
            name="longitude"
            placeholder="longitude"
            value={formData.longitude || ""}
            onChange={handleInputChange}
          />
        </div>{" "}
        <div className="edit-form-row">
          <label>Customer Name :</label>
          <input
            type="text"
            name="customer_name"
            placeholder="customer_name"
            value={formData.customer_name || ""}
            onChange={handleInputChange}
          />
        </div>
        {/* <div className="edit-form-row">
          <label>Joint Swaping :</label>
          <input
            type="text"
            name="rerouting_done"
            placeholder="rerouting_done"
            value={formData.rerouting_done || ""}
            onChange={handleInputChange}
          />
        </div> */}
        <div className="edit-form-row">
          <label>Joint Swaping:</label>

          <select
            type="text"
            name="rerouting_done"
            placeholder="Joint Swaping"
            value={formData.rerouting_done}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="Yes">Yes</option>

            <option value="No">No</option>
          </select>
        </div>
        <div className="edit-form-row">
          <label>Additional Remarks :</label>
          <input
            type="text"
            name="additional_remarks"
            placeholder="additional_remarks"
            value={formData.additional_remarks || ""}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more input fields for other form fields */}
        <div className="button-container">
          <button type="submit" className="btn btn-success">
            Save
          </button>{" "}
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
