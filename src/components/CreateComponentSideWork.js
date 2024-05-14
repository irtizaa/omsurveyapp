// // From ChatGPT
// import React, {useEffect, useState } from 'react';
// import axios from 'axios';
// import './Create.css'
// import { Link } from "react-router-dom";

// const Create = () => {
//   const [data, setData] = useState({
//     "No_of_Pit": '',
//     "Survey_Date": new Date().toISOString().split('T')[0], // Set current date in "YYYY-MM-DD" format
//     "Ring_Tag": "",
//     "Section_Name": "",
//     "Trench_Depth_Ft": '',
//     "Latitude": '',
//     "Longitude": '',
//     "Trench_Alignment": "",
//     "Observations": "",
//     "Correction_Required": "",
//     "Correction_Length": '',
//     "Trench_Distance": '',
//     "ID": ''
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     // Adjust the URL to your API endpoint
//     const apiUrl = 'http://103.31.81.202:8000/customers';

//     const headers = {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods':' POST',
//       'Access-Control-Allow-Headers': '*'
//     }

//     axios.post(apiUrl, data)
//       .then(response => {
//         console.log("Data added successfully:", response.data);
//         // You can perform additional actions after successful data addition
//       })
//       .catch(error => {
//         console.error("Error in adding data:", error);
//         // Handle error if needed
//       });
//   };

//   // useEffect(() => {
//   //   // Get user's geolocation
//   //   if (navigator.geolocation) {
//   //     navigator.geolocation.getCurrentPosition(
//   //       position => {
//   //         const { latitude, longitude } = position.coords;
//   //         setData(prevData => ({
//   //           ...prevData,
//   //           "Latitude": latitude,
//   //           "Longitude": longitude
//   //         }));
//   //       },
//   //       error => {
//   //         console.error("Error getting geolocation:", error);
//   //         // Handle error if needed
//   //       }
//   //     );
//   //   } else {
//   //     console.error("Geolocation is not supported by this browser.");
//   //     // Handle lack of geolocation support
//   //   }
//   // }, []); // Run this effect only once when the component mounts

//   return (
//     <div className="create-container bg-primary">
//       <div>
//            <Link to="/" className="bi bi-arrow-return-left" style={{ float: "left" }}>
//           BACK
//         </Link>
//         </div>
//         <br/>
//      <div className="form-container bg-white rounded p-3">

//       <h2>Add OSP QC Data</h2>
//       <form onSubmit={handleFormSubmit}>
//         {/* Create form inputs for each data field */}
//                    <div>
//         {/* <Link to="/" className="bi bi-arrow-return-left" style={{ float: "left" }}>
//           BACK
//         </Link> */}

//           </div>

//         <div className="form-group">
//              <label htmlFor="ID">ID</label>
//              <input
//               type="text"
//               id="ID"
//               name="ID"
//               placeholder="Enter ID"
//               className="form-control"
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="form-group">
//              <label htmlFor="No_of_Pit">No of Pit</label>
//              <input
//               type="text"
//               id="No_of_Pit"
//               name="No_of_Pit"
//               placeholder="Enter No of Pit"
//               className="form-control"
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="form-group">
//              <label htmlFor="Ring_Tag">Ring Tag</label>
//              <input
//               type="text"
//               id="Ring_Tag"
//               name="Ring_Tag"
//               placeholder="Enter Ring_Tag"
//               className="form-control"
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="form-group">
//              <label htmlFor="Section_Name">Section Name</label>
//              <input
//               type="text"
//               id="Section_Name"
//               name="Section_Name"
//               placeholder="Enter Section_Name"
//               className="form-control"
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="form-group">
//              <label htmlFor="Trench_Depth_Ft">Trench Depth Ft</label>
//              <input
//               type="text"
//               id="Trench_Depth_Ft"
//               name="Trench_Depth_Ft"
//               placeholder="Enter Trench_Depth_Ft"
//               className="form-control"
//               onChange={handleInputChange}
//             />
//           </div>

//           {/* <div className="form-group">
//              <label htmlFor="Latitude">Latitude</label>
//              <input
//               type="number"
//               id="Latitude"
//               name="Latitude"
//               placeholder="Enter Latitude"
//               className="form-control"
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="form-group">
//              <label htmlFor="Longitude">Longitude</label>
//              <input
//               type="number"
//               id="Longitude"
//               name="Longitude"
//               placeholder="Enter Longitude"
//               className="form-control"
//               onChange={handleInputChange}
//             />
//           </div> */}
//           <div className="form-group">
//              <label htmlFor="Trench_Alignment">Trench Alignment</label>
//              <input
//               type="text"
//               id="Trench_Alignment"
//               name="Trench_Alignment"
//               placeholder="Enter Trench_Alignment"
//               className="form-control"
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//              <label htmlFor="Observations">Observations</label>
//              <input
//               type="text"
//               id="Observations"
//               name="Observations"
//               placeholder="Enter Observations"
//               className="form-control"
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//              <label htmlFor="Correction_Required">Correction Required</label>
//              <input
//               type="text"
//               id="Correction_Required"
//               name="Correction_Required"
//               placeholder="Enter Correction_Required"
//               className="form-control"
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//              <label htmlFor="Correction_Length">Correction Length</label>
//              <input
//               type="number"
//               id="Correction_Length"
//               name="Correction_Length"
//               placeholder="Enter Correction_Length"
//               className="form-control"
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//              <label htmlFor="Trench_Distance">Trench Distance</label>
//              <input
//               type="number"
//               id="Trench_Distance"
//               name="Trench_Distance"
//               placeholder="Enter Trench_Distance"
//               className="form-control"
//               onChange={handleInputChange}
//             />
//           </div>
//         {/* <input type="number" name="ID" value={data.ID} onChange={handleInputChange} placeholder='ID'/> */}

//         <button type="submit" className=" bg-primary">Add Data</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default Create;

// Other Approach

//  import React, {useEffect, useState } from 'react';
// import axios from 'axios';
// import './Create.css'

//  function Create() {
//   const [values, setValues] = useState({
//     No_of_Pit: "",
//     Survey_Date: "",
//     Ring_Tag: "",
//     Section_Name: "",
//     Trench_Depth_Ft: "",
//     Latitude: "",
//     Longitude: "",
//     Trench_Alignment: "",
//     Observations: "",
//     Correction_Required: "",
//     Correction_Length: "",
//     Trench_Distance: "",
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:1000/customer", values)
//       .then((res) => {
//         console.log(res);
//         navigate('/')
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
//       <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
//         <h1>Add a User</h1>
//          <form>
//           <input
//             type="text"
//             name="No_of_Pit"
//             value={newCustomer.No_of_Pit}
//             onChange={handleInputChange}
//             placeholder="No of Pit"
//           />

//           <input
//             type="text"
//             name="Survey_Date"
//             value={newCustomer.Survey_Date}
//             onChange={handleInputChange}
//             placeholder="Survey_Date"
//           />

//           <input
//             type="text"
//             name="Ring_Tag"
//             value={newCustomer.Ring_Tag}
//             onChange={handleInputChange}
//             placeholder="Ring_Tag"
//           />
//           <input
//             type="text"
//             name="Section_Name"
//             value={newCustomer.Section_Name}
//             onChange={handleInputChange}
//             placeholder="Section_Name"
//           />
//           <input
//             type="text"
//             name="Trench_Depth_Ft"
//             value={newCustomer.Trench_Depth_Ft}
//             onChange={handleInputChange}
//             placeholder="Trench_Depth_Ft"
//           />
//           <input
//             type="text"
//             name="Latitude"
//             value={newCustomer.Latitude}
//             onChange={handleInputChange}
//             placeholder="Latitude"
//           />
//           <input
//             type="text"
//             name="Longitude"
//             value={newCustomer.Longitude}
//             onChange={handleInputChange}
//             placeholder="Longitude"
//           />
//           <input
//             type="text"
//             name="Trench_Alignment"
//             value={newCustomer.Trench_Alignment}
//             onChange={handleInputChange}
//             placeholder="Trench_Alignment"
//           />
//           <input
//             type="text"
//             name="Observations"
//             value={newCustomer.Observations}
//             onChange={handleInputChange}
//             placeholder="Observations"
//           />
//           <input
//             type="text"
//             name="Correction_Required"
//             value={newCustomer.Correction_Required}
//             onChange={handleInputChange}
//             placeholder="Correction_Required"
//           />
//           <input
//             type="text"
//             name="Correction_Length"
//             value={newCustomer.Correction_Length}
//             onChange={handleInputChange}
//             placeholder="Correction_Length"
//           />
//           <input
//             type="text"
//             name="Trench_Distance"
//             value={newCustomer.Trench_Distance}
//             onChange={handleInputChange}
//             placeholder="Trench_Distance"
//           />

//           <button className="btn btn-success">Submit</button>
//           <Link to="/" className="btn btn-primary ms-3">
//             Back
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default create;

// Another Approach

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './home.css'; // Import custom CSS file for styling

// function Home() {
//   const [data, setData] = useState({
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setData({
//       ...data,
//       [e.target.name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = {
//       email: data.email,
//       password: data.password
//     };
//     axios.post("http://localhost:1000/customer", userData).then((response) => {
//       console.log(response.status, response.data);
//     });
//   };

//   return (
//     <div>
//     <h1>Login Account</h1>

//   </div>
//   );
// }

// export default Home;

// 2nd Approach

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './Create.css'; // Import custom CSS file for styling

// function Home() {
//   const [data, setData] = useState([]);
//   const [newCustomer, setNewCustomer] = useState({
//     No_of_Pit: '',
//     Survey_Date: '',
//     Ring_Tag: '',
//     Section_Name: '',
//     Trench_Depth_Ft: '',
//     Latitude: '',
//     Longitude: '',
//     Trench_Alignment: '',
//     Observations: '',
//     Correction_Required: '',
//     Correction_Length: '',
//     Trench_Distance: '',
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios
//       .get('http://localhost:8000/customers')
//       .then(res => setData(res.data))
//       .catch(err => console.log(err));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewCustomer({
//       ...newCustomer,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post('http://localhost:8000/customers', newCustomer)
//       .then(() => {
//         setNewCustomer({
//           ID: '',
//           No_of_Pit: '',
//           Survey_Date: '',
//           Ring_Tag: '',
//           Section_Name: '',
//           Trench_Depth_Ft: '',
//           Latitude: '',
//           Longitude: '',
//           Trench_Alignment: '',
//           Observations: '',
//           Correction_Required: '',
//           Correction_Length: '',
//           Trench_Distance: '',
//         });
//         fetchData(); // Refresh data after successful POST
//       })
//       .then(res =>console.log(res))
//       .catch(err => console.log(err));
//   };

//   return (
//     <div className="home-container bg-primary">
//       <div className="table-container bg-white rounded p-3">
//         <h2 className="table-heading">Zong QC</h2>
//         <div className="table-responsive">
//           <table className="table">
//             {/* Table headers and rows as before */}
//           </table>
//         </div>
//         <div className="create-link-container">
//           <form onSubmit={handleSubmit}>
//             {/* Input fields for adding new customer data */}
//             <input
//               type="text"
//               name="ID"
//               value={newCustomer.ID}
//               onChange={handleInputChange}
//               placeholder="ID"
//             />
//             <input
//               type="text"
//               name="No_of_Pit"
//               value={newCustomer.No_of_Pit}
//               onChange={handleInputChange}
//               placeholder="No of Pit"
//             />

//                <input
//               type="text"
//               name="Survey_Date"
//               value={newCustomer.Survey_Date}
//               onChange={handleInputChange}
//               placeholder="Survey_Date"
//             />

//               <input
//               type="text"
//               name="Ring_Tag"
//               value={newCustomer.Ring_Tag}
//               onChange={handleInputChange}
//               placeholder="Ring_Tag"
//             />
//               <input
//               type="text"
//               name="Section_Name"
//               value={newCustomer.Section_Name}
//               onChange={handleInputChange}
//               placeholder="Section_Name"
//             />
//               <input
//               type="text"
//               name="Trench_Depth_Ft"
//               value={newCustomer.Trench_Depth_Ft}
//               onChange={handleInputChange}
//               placeholder="Trench_Depth_Ft"
//             />
//               <input
//               type="text"
//               name="Latitude"
//               value={newCustomer.Latitude}
//               onChange={handleInputChange}
//               placeholder="Latitude"
//             />
//               <input
//               type="text"
//               name="Longitude"
//               value={newCustomer.Longitude}
//               onChange={handleInputChange}
//               placeholder="Longitude"
//             />
//               <input
//               type="text"
//               name="Trench_Alignment"
//               value={newCustomer.Trench_Alignment}
//               onChange={handleInputChange}
//               placeholder="Trench_Alignment"
//             />
//               <input
//               type="text"
//               name="Observations"
//               value={newCustomer.Observations}
//               onChange={handleInputChange}
//               placeholder="Observations"
//             />
//               <input
//               type="text"
//               name="Correction_Required"
//               value={newCustomer.Correction_Required}
//               onChange={handleInputChange}
//               placeholder="Correction_Required"
//             />
//               <input
//               type="text"
//               name="Correction_Length"
//               value={newCustomer.Correction_Length}
//               onChange={handleInputChange}
//               placeholder="Correction_Length"
//             />
//               <input
//               type="text"
//               name="Trench_Distance"
//               value={newCustomer.Trench_Distance}
//               onChange={handleInputChange}
//               placeholder="Trench_Distance"
//             />

//             {/* Add other input fields similarly */}
//             <button type="submit" className="btn btn-success">
//             Submits
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

// 1st Approach
// In this code lat long fetching on buton click

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Create() {
  const [values, setValues] = useState({
    ID: "",
    No_of_Pit: "",
    Ring_Tag: "",
    Section_Name: "",
    Trench_Depth_Ft: "",
    Latitude: "",
    Longitude: "",
    Trench_Alignment: "",
    Observations: "",
    Correction_Required: "",
    Correction_Length: "",
    Trench_Distance: "",
  });

  const [userLocation, setUserLocation] = useState({
    latitude: "",
    longitude: "",
    surveyDate: "", // New state for survey date
  });

  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:1000/customer", values)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  const handleSubmit = (e) => {
    // alert('asds')
    e.preventDefault();
    axios
      .post("http://103.31.81.202:7000/customers", values)
      .then((res) => {
        console.log(res.data); // Logging the response data
        // navigate("/"); // Redirecting to the home page after successful submission
      })
      .catch((err) => {
        alert(err);
      });
  };
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            surveyDate: new Date().toISOString().split("T")[0], // Set the current date
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
    // Auto fill the form with the user's location when the component mounts
    getUserLocation();
  }, []);

  return (
    <div className="create-container bg-primary">
      <div className="form-container bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <div>
            <Link
              to="/"
              className="bi bi-arrow-return-left"
              style={{ float: "left" }}
            >
              BACK
            </Link>
            <br />
            <br />
            <h2 className="form-heading">Add Items</h2>
          </div>

          <div className="form-group">
            <label htmlFor="ID">ID</label>
            <input
              type="text"
              id="ID"
              name="ID"
              placeholder="Enter ID"
              className="form-control"
              onChange={(e) => setValues({ ...values, ID: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="No_of_Pit">No of Pit</label>
            <input
              type="text"
              id="No_of_Pit"
              name="No_of_Pit"
              placeholder="Enter No of Pit"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, No_of_Pit: e.target.value })
              }
            />
          </div>

          {/* Survey Date input field */}
          <div className="form-group">
            <label htmlFor="Survey_Date">Survey Date</label>
            <input
              type="date"
              id="Survey_Date"
              name="Survey_Date"
              className="form-control"
              value={userLocation.surveyDate}
              onChange={(e) =>
                setValues({ ...values, Survey_Date: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="Ring_Tag">Ring Tag</label>
            <input
              type="text"
              id="Ring_Tag"
              name="Ring_Tag"
              placeholder="Enter Ring Tag"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, Ring_Tag: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="Section_Name">Section Name</label>
            <input
              type="text"
              id="Section_Name"
              name="Section_Name"
              placeholder="Enter Section Name"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, Section_Name: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="Trench_Depth_Ft">Trench Depth Ft</label>
            <input
              type="text"
              id="Trench_Depth_Ft"
              name="Trench_Depth_Ft"
              placeholder="Enter Trench Depth Ft"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, Trench_Depth_Ft: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="Latitude">Latitude</label>
            <input
              type="text"
              id="Latitude"
              name="Latitude"
              placeholder="Enter Latitude"
              className="form-control"
              value={userLocation.latitude}
              onChange={(e) =>
                setValues({ ...values, Latitude: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="Longitude">Longitude</label>
            <input
              type="text"
              id="Longitude"
              name="Longitude"
              placeholder="Enter Longitude"
              className="form-control"
              value={userLocation.longitude}
              onChange={(e) =>
                setValues({ ...values, Longitude: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="Trench_Alignment">Trench Alignment</label>
            <input
              type="text"
              id="Trench_Alignment"
              name="Trench_Alignment"
              placeholder="Enter Trench Alignment"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, Trench_Alignment: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="Observations">Observations</label>
            <input
              type="text"
              id="Observations"
              name="Observations"
              placeholder="Enter Observations"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, Observations: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="Correction_Required">Correction Required</label>
            <input
              type="text"
              id="Correction_Required"
              name="Correction_Required"
              placeholder="Enter Correction Required"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, Correction_Required: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="Correction_Length">Correction Length</label>
            <input
              type="text"
              id="Correction_Length"
              name="Correction_Length"
              placeholder="Enter Correction Length"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, Correction_Length: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="Trench_Distance">Trench Distance</label>
            <input
              type="text"
              id="Trench_Distance"
              name="Trench_Distance"
              placeholder="Enter Trench Distance"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, Trench_Distance: e.target.value })
              }
            />
          </div>

          {/* <button className="btn btn-primary" onClick={getUserLocation}>
            Get Location
          </button> */}

          <button type="submit" className="btn btn-success">
            Submits
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;

// Approach

// import React, { useState } from 'react';
// // import './App.css';

// function Create() {
//   const [formData, setFormData] = useState({
//     ID: '',
//     No_of_Pit: '',
//     Survey_Date: '',
//     Ring_Tag: '',
//     Section_Name: '',
//     Trench_Depth_Ft: '',
//     Latitude: '',
//     Longitude: '',
//     Trench_Alignment: '',
//     Observations: '',
//     Correction_Required: '',
//     Correction_Length: '',
//     Trench_Distance: '',
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('http://localhost:1000/customers', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log('New customer added successfully!');
//       } else {
//         console.log('Failed to add new customer.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Add New Customer</h1>
//       <form onSubmit={handleSubmit}>
//         <label>ID:</label>
//         <input
//           type="text"
//           name="ID"
//           value={formData.ID}
//           onChange={handleChange}
//         />
//         <label>No of Pit:</label>
//         <input
//           type="text"
//           name="No_of_Pit"
//           value={formData.No_of_Pit}
//           onChange={handleChange}
//         />
//         <label>Survey Date:</label>
//         <input
//           type="text"
//           name="Survey_Date"
//           value={formData.Survey_Date}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Customer</button>
//       </form>
//     </div>
//   );
// }

// export default Create;
