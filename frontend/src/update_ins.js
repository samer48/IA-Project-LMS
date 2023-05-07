import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./update_ins.css"

const Update_ins = () => {
  const [book, setBook] = useState({
    statuss: '',        
      email: '',        
      password: '',
      phone: '',
      type:''
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
      await axios.put(`http://localhost:8081/list_inst/${id}`, book);
      navigate("/list_inst");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="update_ins vh-100">
      <div className="form">
      <h1>Update courses</h1>
      <input
        type="text"
        placeholder="statuss "
        name="statuss"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
        <input
        type="text"
        placeholder="phone"
        name="phone"
        onChange={handleChange}
      />
        <input
        type="text"
        placeholder="type"
        name="type"
        onChange={handleChange}
      />
     
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
    </div>
    </div>
    
  );
};

export default Update_ins;
