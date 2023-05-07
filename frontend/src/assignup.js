import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Assignup = () => {
  const [book, setBook] = useState({
    name: '',        
    code: '',        
    course_name: '',
    assigned_instructor:''
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8081/list_cources/${bookId}`, book);
      navigate("/list_cources");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>set instructor</h1>
        <input
        type="text"
        placeholder="code"
        name="code"
        onChange={handleChange}
      />    

      
      <button onClick={handleClick}>submit</button>
      {error && "Something went wrong!"}
    </div>
  );
};

export default Assignup;
