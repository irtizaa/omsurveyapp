//tried from chatgpt on 30-11-2023
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const [formData, setFormData] = useState({
    id: "",
    complaints_number: "",
    signup_id: "",
    node_name: "",
    joint_connectivity: "",
    in_cable_core_capacity: "",
    out_cable_core_capacity: "",
    in_cable_tube_color: "",
    in_cable_core_color: "",
    out_cable_tube_color: "",
    out_cable_core_color: "",
    latitude: "",
    longitude: "",
    customer_name: "",
    rerouting_done: "",
    additional_remarks: "",
    survey_date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    fetchExistingId();
  }, [formData.latitude, formData.longitude]);

  const fetchExistingId = async () => {
    try {
      const response = await axios.get(
        "https://onmapi.multinet.com.pk:81/customers"
      );
      const data = response.data;
      const existingEntry = data.find(
        (entry) =>
          entry.latitude === formData.latitude &&
          entry.longitude === formData.longitude
      );
      return existingEntry ? existingEntry.id : null;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const setID = async () => {
    const existingID = await fetchExistingId();
    if (existingID !== null) {
      setFormData((prevData) => ({ ...prevData, id: existingID }));
    } else {
      fetchMaxId();
    }
  };

  useEffect(() => {
    setID();
  }, [formData.latitude, formData.longitude]);

  const fetchMaxId = async () => {
    try {
      const response = await axios.get(
        "https://onmapi.multinet.com.pk:81/customers"
      );
      const data = response.data;
      if (data.length > 0) {
        const maxId = data.reduce(
          (max, item) => (item.id > max ? item.id : max),
          0
        );
        setFormData((prevData) => ({ ...prevData, id: maxId + 1 }));
      } else {
        setFormData((prevData) => ({ ...prevData, id: 1 }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://onmapi.multinet.com.pk:81/customers", formData);
      alert("Data posted successfully!");
    } catch (error) {
      console.error("Error posting data:", error.message);
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData({
            ...formData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <Link to="/" className="btn btn-secondary ml-2">
          Back
        </Link>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Add O&M Data</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="id">ID</label>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    value={formData.id}
                    placeholder="ID"
                    className="form-control"
                    disabled // Disable editing of ID field
                    onChange={handleInputChange}
                  />
                  {/* <input
                    type="text"
                    id="id"
                    name="id"
                    value={formData.id}
                    placeholder="ID"
                    className="form-control"
                    onChange={handleInputChange}
                  /> */}
                </div>
                <div className="form-group">
                  <label htmlFor="complaints_number">Complaints Number</label>
                  <input
                    type="text"
                    id="complaints_number"
                    name="complaints_number"
                    value={formData.complaints_number}
                    placeholder="Complaints Number"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="survey_date">Survey Date</label>
                  <input
                    type="text"
                    id="survey_date"
                    name="survey_date"
                    value={formData.survey_date}
                    placeholder="Survey Date"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="complaints_number">
                    Singup ID/Project ID
                  </label>
                  <input
                    type="text"
                    id="signup_id"
                    name="signup_id"
                    value={formData.signup_id}
                    placeholder="Signup ID"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="complaints_number">
                    Node Name/Section Name
                  </label>
                  <input
                    type="text"
                    id="node_name"
                    name="node_name"
                    value={formData.node_name}
                    placeholder="Node Name"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="joint_connectivity">Joint Connectivity</label>
                  <select
                    type="text"
                    id="joint_connectivity"
                    name="joint_connectivity"
                    value={formData.joint_connectivity}
                    placeholder="Joint Connectivity"
                    className="formDD-control"
                    onChange={handleInputChange}
                  >
                    <option value=""></option>
                    <option value="Aerial">Aerial</option>

                    <option value="Buried">Buried</option>
                  </select>
                  {/* <input
                    type="text"
                    id="joint_connectivity"
                    name="joint_connectivity"
                    value={formData.joint_connectivity}
                    placeholder="Joint Connectivity"
                    className="form-control"
                    onChange={handleInputChange}
                  /> */}
                </div>

                <div className="form-group">
                  <label htmlFor="in_cable_core_capacity">
                    In Cable Core Capacity
                  </label>

                  <select
                    type="text"
                    id="in_cable_core_capacity"
                    name="in_cable_core_capacity"
                    value={formData.in_cable_core_capacity}
                    placeholder="In Cable Core Capacity"
                    className="formDD-control"
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

                <div className="form-group">
                  <label htmlFor="out_cable_core_capacity">
                    Out Cable Core Capacity
                  </label>
                  <select
                    type="text"
                    id="out_cable_core_capacity"
                    name="out_cable_core_capacity"
                    value={formData.out_cable_core_capacity}
                    placeholder="Out Cable Core Capacity"
                    className="formDD-control"
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

                <div className="form-group">
                  <label htmlFor="in_cable_tube_color">
                    In Cable Tube Color
                  </label>

                  <select
                    type="text"
                    id="in_cable_core_color"
                    name="in_cable_core_color"
                    value={formData.in_cable_core_color}
                    placeholder="In Cable Core Color"
                    className="formDD-control"
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

                <div className="form-group">
                  <label htmlFor="in_cable_core_color">
                    In Cable Core Color
                  </label>

                  <select
                    type="text"
                    id="in_cable_tube_color"
                    name="in_cable_tube_color"
                    value={formData.in_cable_tube_color}
                    placeholder="In Cable Tube Color"
                    className="formDD-control"
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
                  {/* <input
                    type="text"
                    id="in_cable_core_color"
                    name="in_cable_core_color"
                    value={formData.in_cable_core_color}
                    placeholder="In Cable Core Color"
                    className="form-control"
                    onChange={handleInputChange}
                  /> */}
                </div>

                <div className="form-group">
                  <label htmlFor="out_cable_tube_color">
                    Out Cable Tube Color
                  </label>

                  <select
                    type="text"
                    id="out_cable_tube_color"
                    name="out_cable_tube_color"
                    value={formData.out_cable_tube_color}
                    placeholder="Out Cable Tube Color"
                    className="formDD-control"
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
                  {/* <input
                    type="text"
                    id="out_cable_tube_color"
                    name="out_cable_tube_color"
                    value={formData.out_cable_tube_color}
                    placeholder="Out Cable Tube Color"
                    className="form-control"
                    onChange={handleInputChange}
                  /> */}
                </div>

                <div className="form-group">
                  <label htmlFor="out_cable_core_color">
                    Out Cable Core Color
                  </label>

                  <select
                    type="text"
                    id="out_cable_core_color"
                    name="out_cable_core_color"
                    value={formData.out_cable_core_color}
                    placeholder="Out Cable Core Color"
                    className="formDD-control"
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
                  {/* <input
                    type="text"
                    id="out_cable_core_color"
                    name="out_cable_core_color"
                    value={formData.out_cable_core_color}
                    placeholder="Out Cable Core Color"
                    className="form-control"
                    onChange={handleInputChange}
                  /> */}
                </div>

                <div className="form-group">
                  <label htmlFor="latitude">Latitude</label>
                  <input
                    type="text"
                    id="latitude"
                    name="latitude"
                    value={formData.latitude}
                    placeholder="Latitude"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="longitude">Longitude</label>
                  <input
                    type="text"
                    id="longitude"
                    name="longitude"
                    value={formData.longitude}
                    placeholder="Longitude"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="customer_name">Customer Name</label>
                  <input
                    type="text"
                    id="customer_name"
                    name="customer_name"
                    value={formData.customer_name}
                    placeholder="Customer Name"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="rerouting_done"> Joint Swaping</label>

                  <select
                    type="text"
                    id="rerouting_done"
                    name="rerouting_done"
                    value={formData.rerouting_done}
                    placeholder="Rerouting Done"
                    className="formDD-control"
                    onChange={handleInputChange}
                  >
                    <option value=""></option>
                    <option value="Yes">Yes</option>

                    <option value="No">No</option>
                  </select>
                  {/* <input
                    type="text"
                    id="rerouting_done"
                    name="rerouting_done"
                    value={formData.rerouting_done}
                    placeholder="Rerouting Done"
                    className="form-control"
                    onChange={handleInputChange}
                  /> */}
                </div>

                <div className="form-group">
                  <label htmlFor="additional_remarks">Additional Remarks</label>
                  <input
                    type="text"
                    id="additional_remarks"
                    name="additional_remarks"
                    value={formData.additional_remarks}
                    placeholder="Additional Remarks"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>

                {/* <button
                  className="btn btn-primary mr-2"
                  onClick={getUserLocation}
                >
                  Get Location
                </button> */}
                <button type="submit" className="btn btn-success">
                  Add Data
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
