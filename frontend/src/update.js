import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./update.css";

const Update = () => {
  const [book, setBook] = useState({
    name: "",
    code: "",
    statuss:""
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const id = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8081/list_cources/${id}`, book);
      navigate("/list_cources");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="update vh-100">
      <div className="form">
      <h1>Update courses</h1>
      <input
        type="text"
        placeholder="course name "
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="code"
        name="code"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="status"
        name="statuss"
        onChange={handleChange}
      />
     
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
    </div>
    </div>
    
  );
};

export default Update;
