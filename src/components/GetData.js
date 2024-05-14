import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./FetchDataForm.css";
import EditForm from "./EditData";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function FetchDataForm() {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://onmapi.multinet.com.pk:81/customers"
      );
      const fetchedData = response.data;
      // Sort the fetched data by ID in ascending order
      const sortedData = fetchedData.sort((a, b) => a.id - b.id);
      setData(sortedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const navigate = useNavigate();

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`https://onmapi.multinet.com.pk:81/customers/${id}`);
      // Remove the deleted item from the data array
      const updatedDataArray = data.filter((item) => item.id !== id);
      setData(updatedDataArray);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleEditClick = (item, id) => {
    setEditItem(item);
    navigate(`/edit/${item.id}`);
  };

  const handleUpdate = (updatedData) => {
    // Update the data in your state
    const updatedDataArray = data.map((item) =>
      item.id === updatedData.id ? updatedData : item
    );
    setData(updatedDataArray);
    setEditItem(null); // Clear editItem after update
  };
  const filteredData = data.filter((item) =>
    String(item.signup_id).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fetch-data-container">
      <h2 className="fetch-data-heading">GIS O&M Survey App</h2>

      <div className="create-link-container">
        <Link to="/create" className="btn btn-success">
          Create New
        </Link>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search By Signup ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="data-table-container">
        {filteredData.map((item) => (
          <div key={item.id} className="data-row col-lg-6">
            {/* <div className="data-col">
              <b>ID:</b> {item.id}
            </div> */}
            <div className="data-col">
              <b>Complaints:</b> {item.complaints_number}
            </div>
            <div className="data-col">
              <b>Date:</b> {item.survey_date}
            </div>
            <div className="data-col">
              <b>Signup ID/Project ID:</b> {item.signup_id}
            </div>
            <div className="data-col">
              <b>Node Name/Section Name:</b> {item.node_name}
            </div>
            <div className="data-col">
              <b>Joint Connectivity:</b> {item.joint_connectivity}
            </div>
            <div className="data-col">
              <b>In Cable Core Capacity:</b> {item.in_cable_core_capacity}
            </div>
            <div className="data-col">
              <b>Out Cable Core Capacity:</b> {item.out_cable_core_capacity}
            </div>
            <div className="data-col">
              <b>In Cable Tube Color:</b> {item.in_cable_tube_color}
            </div>
            <div className="data-col">
              <b>In Cable Core Color:</b> {item.in_cable_core_color}
            </div>
            <div className="data-col">
              <b>Out Cable Tube Color:</b> {item.out_cable_tube_color}
            </div>
            <div className="data-col">
              <b>Out Cable Core Color:</b> {item.out_cable_core_color}
            </div>
            <div className="data-col">
              <b>Latitude:</b> {item.latitude}
            </div>
            <div className="data-col">
              <b>Longitude:</b> {item.longitude}
            </div>
            <div className="data-col">
              <b>Customer Name:</b> {item.customer_name}
            </div>
            <div className="data-col">
              <b> Joint Swaping:</b> {item.rerouting_done}
            </div>
            <div className="data-col">
              <b>Additional Remarks:</b> {item.additional_remarks}
            </div>
            <div className="button-container">
              <button
                onClick={() => handleEditClick(item, item.id)}
                className="btn btn-primary"
              >
                Edit
              </button>
              {/* <Link path="/update/:id" element={<EditForm />} />
                <Link to={`/edit/${item.id}`} className="btn btn-primary">
                  Edit
                </Link>
               */}
              {/* <Link to={`/edit/${item.id}`} className="btn btn-success">
                Edit
              </Link> */}
              {/* <Link to={`/edit/${item.id}`} className="btn btn-primary">
                Edit
              </Link> */}

              <button
                onClick={() => handleDeleteClick(item.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editItem && <EditForm item={editItem} onUpdate={handleUpdate} />}
    </div>
  );
}

export default FetchDataForm;
