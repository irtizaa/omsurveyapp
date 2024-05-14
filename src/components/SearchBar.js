import React, { useEffect, useState } from "react";

function SearchBar() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    return fetch("https://onmapi.multinet.com.pk:81/customers")
      .then((res) => res.json())

      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [query, setQuery] = useState("");

  const search_parameters = Object.keys(Object.assign({}, ...data));

  function search(data) {
    return data.filter((data) =>
      search_parameters.some((parameter) =>
        data[parameter].toString().toLowerCase().includes(query)
      )
    );
  }

  return (
    <div className="container">
      <center>
        <h1>Search component in ReactJS</h1>
      </center>

      <div className="input-box">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search user"
        />
      </div>

      <center>
        {search(data).map((dataObj) => {
          return (
            <div className="box">
              <div class="card">
                <div class="category">@{dataObj.complaints_number} </div>

                <div class="heading">
                  {dataObj.signup_id}

                  <div class="author">{dataObj.node_name}</div>
                </div>
              </div>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default SearchBar;
