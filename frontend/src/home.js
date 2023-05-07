import React from "react";
import { Link } from "react-router-dom";
import "./home.css"

function Home() {
   return (
    <div className="container">
        <div className="head">
            <h1 className="mb-5 text-center">Welcome</h1>
        </div>
      <div className=" row justify-content-between text-center">
         <div className="col-lg-3 item1 p-3">
            <p>If you are a student click here to login</p>
            <Link
               to="/Loogin"
               className="btn btn-primary border   rounded-0 text-decoration-none"
            >
               student
            </Link>
         </div>
         <div className="col-lg-3 item2 p-3">
            <p>If you are an Admin click here to login</p>
            <Link
               to="/Login"
               className="btn btn-danger border   rounded-0 text-decoration-none"
            >
               Admin{" "}
            </Link>
         </div>

         <div className="col-lg-3 item3 p-3" >
            <p>If you are an Instructor click here to login</p>
            <Link
               to="/Login2"
               className="btn btn-dark border  rounded-0 text-decoration-none"
            >
               instructor{" "}
            </Link>
         </div>
      </div>
      </div>
   );
}
export default Home;
