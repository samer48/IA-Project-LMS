import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./list_enrolled.css";
const List_enrolled = () => {
   ///////////////////////////

   /////////////////////////
   const [list_enrolled, setlist_courcess] = useState([]);

   useEffect(() => {
      const fetchAlllist_courcess = async () => {
         try {
            const res = await axios.get("http://localhost:8081/list_enrolled");
            setlist_courcess(res.data);
         } catch (err) {
            console.log(err);
         }
      };
      fetchAlllist_courcess();
   }, []);

   console.log(list_enrolled);

   return (
      <section>
         <div className="container">
            <h1 className="text-center">ALL Enrolled student to cources</h1>
            <div className="list_enrolled row justify-content-between">
               {list_enrolled.map((list_enrolled) => (
                  <div
                     key={list_enrolled.id}
                     className="list_enrolled_item col-lg-3 mt-5 mb-5 p-5 ms-1 me-1"
                  >
                     <p> name : <span>{list_enrolled.name}</span></p>
                     <p>course : <span>{list_enrolled.course_name}</span></p>
                     <p> code : <span>{list_enrolled.code}</span></p>
<div className="row justify-content-center">
  

                     <button className="gradsup btn btn-primary  col-lg-5 mt-2">
                        <Link
                           to={`/gradsup/${list_enrolled.id}`}
                           style={{ color: "inherit", textDecoration: "none" }}
                        >
                           add grads
                        </Link>
                     </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default List_enrolled;
