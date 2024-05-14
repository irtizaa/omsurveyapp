// 2nd Apporach from GPT
import React, { useState } from "react";
import "./EditForm.css";
import { useNavigate } from "react-router-dom";

function EditForm({ item, onUpdate }) {
  const [editedFields, setEditedFields] = useState(item);
  const [dataSaved, setDataSaved] = useState(false);
  const [editing, setEditing] = useState(true); // Track editing state

  const navigate = useNavigate();

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setEditedFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    // Update the form fields with the edited data
    setEditedFields((prevFields) => ({
      ...prevFields,
      ...editedFields,
    }));

    // Call the API to update the data
    // Make sure to match the API endpoint and method correctly
    fetch(`https://onmapi.multinet.com.pk:81/customers/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedFields),
    })
      .then((response) => {
        console.log("Response:", response); // Log the response
        return response.text(); // Convert response to text
      })
      .then((data) => {
        console.log("Response Data:", data); // Log the response data
        onUpdate(item); // Notify the parent component about the update with the original item
        setDataSaved(true); // Set dataSaved to true after successful update
        // setTimeout(() => {
        //   setDataSaved(false); // Reset dataSaved after some time
        //   window.location.reload(); // Refresh the page
        // }, 1000); // Refresh after 2 seconds

        window.location.reload(); // Refresh the page immediately
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleCancelClick = () => {
    // Reset edited fields to original item values
    setEditedFields(item);
    // Hide the edit fields
    setEditing(false);
  };

  return (
    <div className="edit-form-container data-row col-lg-6">
      {!dataSaved &&
        editing && ( // Render only if data has not been saved
          <div className="edit-form">
            {/* <div className="edit-form-row">
              <label>ID:</label>
              <input
                type="number"
                name="id"
                placeholder="ID"
                value={editedFields.id}
                onChange={handleEditInputChange}
              />
            </div> */}
            <div className="edit-form-row">
              <label>Complaints Number:</label>
              <input
                type="number"
                name="complaints_number"
                placeholder="Complaints Number"
                value={editedFields.complaints_number}
                onChange={handleEditInputChange}
              />
            </div>
            <div className="edit-form-row">
              <label>Survey Date:</label>
              <input
                type="date"
                name="survey_date"
                placeholder="Survey Date"
                value={editedFields.survey_date}
                onChange={handleEditInputChange}
              />
            </div>

            <div className="edit-form-row">
              <label>Signup ID/Project ID:</label>
              <input
                type="number"
                name="signup_id"
                placeholder="signup_id"
                value={editedFields.signup_id}
                onChange={handleEditInputChange}
              />
            </div>

            <div className="edit-form-row">
              <label>Node Name/Section Name:</label>
              <input
                type="text"
                name="node_name"
                placeholder="node_name"
                value={editedFields.node_name}
                onChange={handleEditInputChange}
              />
            </div>

            <div className="edit-form-row">
              <label>Joint Connectivity:</label>

              <select
                type="text"
                name="joint_connectivity"
                placeholder="joint_connectivity"
                value={editedFields.joint_connectivity}
                onChange={handleEditInputChange}
              >
                <option value=""></option>
                <option value="Aerial">Aerial</option>

                <option value="Buried">Buried</option>
              </select>

              {/* <input
                type="text"
                name="joint_connectivity"
                placeholder="joint_connectivity"
                value={editedFields.joint_connectivity}
                onChange={handleEditInputChange}
              /> */}
            </div>

            <div className="edit-form-row">
              <label>In Cable Core Capacity:</label>
              <select
                type="text"
                name="in_cable_core_capacity"
                placeholder="in_cable_core_capacity"
                value={editedFields.in_cable_core_capacity}
                onChange={handleEditInputChange}
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
              <label>Out Cable Core Capacity:</label>

              <select
                type="text"
                name="out_cable_core_capacity"
                placeholder="out_cable_core_capacity"
                value={editedFields.out_cable_core_capacity}
                onChange={handleEditInputChange}
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
              <label>In Cable Tube Color:</label>

              <select
                type="text"
                name="in_cable_tube_color"
                placeholder="in_cable_tube_color"
                value={editedFields.in_cable_tube_color}
                onChange={handleEditInputChange}
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
              <label>In Cable Core Color:</label>

              <select
                type="text"
                name="in_cable_core_color"
                placeholder="in_cable_core_color"
                value={editedFields.in_cable_core_color}
                onChange={handleEditInputChange}
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
              <label>Out Cable Tube Color:</label>

              <select
                type="text"
                name="out_cable_tube_color"
                placeholder="out_cable_tube_color"
                value={editedFields.out_cable_tube_color}
                onChange={handleEditInputChange}
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
              <label>Out Cable Core Color:</label>

              <select
                type="text"
                name="out_cable_core_color"
                placeholder="out_cable_core_color"
                value={editedFields.out_cable_core_color}
                onChange={handleEditInputChange}
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
              <label>Latitude:</label>
              <input
                type="number"
                name="latitude"
                placeholder="latitude"
                value={editedFields.latitude}
                onChange={handleEditInputChange}
              />
            </div>

            <div className="edit-form-row">
              <label>Longitude:</label>
              <input
                type="number"
                name="longitude"
                placeholder="longitude"
                value={editedFields.longitude}
                onChange={handleEditInputChange}
              />
            </div>

            <div className="edit-form-row">
              <label>Customer Name:</label>
              <input
                type="text"
                name="customer_name"
                placeholder="customer_name"
                value={editedFields.customer_name}
                onChange={handleEditInputChange}
              />
            </div>

            <div className="edit-form-row">
              <label>Joint Swaping:</label>

              <select
                type="text"
                name="rerouting_done"
                placeholder="rerouting_done"
                value={editedFields.rerouting_done}
                onChange={handleEditInputChange}
              >
                <option value=""></option>
                <option value="Yes">Yes</option>

                <option value="No">No</option>
              </select>
            </div>

            <div className="edit-form-row">
              <label>Additional Remarks:</label>
              <input
                type="text"
                name="additional_remarks"
                placeholder="additional_remarks"
                value={editedFields.additional_remarks}
                onChange={handleEditInputChange}
              />
            </div>

            {/* <div className="edit-form-row">
            <button onClick={handleSaveClick} className="btn btn-success">
              Save
            </button>
          </div> */}

            <div className="edit-form-row">
              <button onClick={handleSaveClick} className="btn btn-success">
                Save
              </button>
              <button onClick={handleCancelClick} className="btn btn-danger">
                Cancel
              </button>
            </div>
          </div>
        )}

      {dataSaved && <div className="data-saved-message">Data Saved!</div>}
    </div>
  );
}

export default EditForm;

// import React, { useState, useEffect } from "react";

// function EditForm({ item, onUpdate }) {
//   const [formData, setFormData] = useState(item);

//   useEffect(() => {
//     setFormData(item);
//   }, [item]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = () => {
//     onUpdate(formData);
//   };

//   return (
//     <div>
//       <h2>Edit Form</h2>
//       <form>
//         {/* Render input fields for editing */}
//         <input
//           type="number"
//           name="No_of_Pit"
//           value={formData.No_of_Pit}
//           onChange={handleInputChange}
//         />

//         <input
//           type="date"
//           name="Survey_Date"
//           value={formData.Survey_Date}
//           onChange={handleInputChange}
//         />

//         <input
//           type="text"
//           name="Ring_Tag"
//           value={formData.Ring_Tag}
//           onChange={handleInputChange}
//         />

//         <input
//           type="text"
//           name="Section_Name"
//           value={formData.Section_Name}
//           onChange={handleInputChange}
//         />

//         <input
//           type="number"
//           name="Trench_Depth_Ft"
//           value={formData.Trench_Depth_Ft}
//           onChange={handleInputChange}
//         />

//         <input
//           type="number"
//           name="Latitude"
//           value={formData.Latitude}
//           onChange={handleInputChange}
//         />

//         <input
//           type="number"
//           name="Longitude"
//           value={formData.Longitude}
//           onChange={handleInputChange}
//         />

//         <input
//           type="text"
//           name="Trench_Alignment"
//           value={formData.Trench_Alignment}
//           onChange={handleInputChange}
//         />

//         <input
//           type="text"
//           name="Observations"
//           value={formData.Observations}
//           onChange={handleInputChange}
//         />

//         <input
//           type="text"
//           name="Correction_Required"
//           value={formData.Correction_Required}
//           onChange={handleInputChange}
//         />

//         <input
//           type="number"
//           name="Correction_Length"
//           value={formData.Correction_Length}
//           onChange={handleInputChange}
//         />

//         <input
//           type="number"
//           name="Trench_Distance"
//           value={formData.Trench_Distance}
//           onChange={handleInputChange}
//         />

//         <input
//           type="number"
//           name="ID"
//           value={formData.ID}
//           onChange={handleInputChange}
//         />

//         {/* Add more input fields for other data */}
//         <button type="button" onClick={handleUpdate}>
//           Update
//         </button>
//       </form>
//     </div>
//   );
// }

// export default EditForm;
