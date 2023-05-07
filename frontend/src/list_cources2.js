import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./list_cources2.css";
const List_cources2 = () => {
   ///////////////////////////

   /////////////////////////

   ////////////////////////
   const [list_courcess, setlist_courcess] = useState([]);

   useEffect(() => {
      const fetchAlllist_courcess = async () => {
         try {
            const res = await axios.get("http://localhost:8081/list_cources");
            setlist_courcess(res.data);
         } catch (err) {
            console.log(err);
         }
      };
      fetchAlllist_courcess();
   }, []);

   console.log(list_courcess);

   return (
      <section className="mt-5">
         <div className="container text-center">
            <div>
               <div>
                  <h1 className="fs-1 mb-4">ALL cources</h1>
                  <p className="fs-5 fw-bold ">
                     student should see courses then register
                  </p>
                  <div className="list_cources row mt-5 justify-content-between">
                     {list_courcess.map((list_cources) => (
                        <div
                           key={list_cources.id}
                           className="list_cource col-lg-3 text-start mb-5"
                        >
                           <h2 className="fs-4 mt-2 mb-4">
                              course name:{" "}
                              <span className="text-danger fw-bold">
                                 {list_cources.name}
                              </span>
                           </h2>
                           <p className="mt-2">
                              course code:{" "}
                              <span className="text-info fw-bold">
                                 {list_cources.code}
                              </span>
                           </p>
                           <p className="mt-2">
                              course statuss:{" "}
                              <span className="text-primary fw-bold">
                                 {list_cources.statuss}
                              </span>
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default List_cources2;
