import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./listgrads.css";

const Listgrads = () => {
   ///////////////////////////

   /////////////////////////
   const [listgrads, setlist_courcess] = useState([]);

   useEffect(() => {
      const fetchAlllist_courcess = async () => {
         try {
            const res = await axios.get("http://localhost:8081/listgrads");
            setlist_courcess(res.data);
         } catch (err) {
            console.log(err);
         }
      };
      fetchAlllist_courcess();
   }, []);

   console.log(listgrads);

   return (
      <div className="container mt-5">
         <h1 className="text-center">ALL students grads</h1>
         <div className="listgrad row justify-content-between">
            {listgrads.map((listgrads) => (
               <div
                  key={listgrads.id}
                  className="listgrads col-lg-3 mt-5 mb-5 ms-1 me-1 p-4"
               >
                  <p>
                     STUDENT NAME : <span>{listgrads.name}</span>
                  </p>
                  <p>
                     COURSE NAME : <span>{listgrads.course_name}</span>
                  </p>
                  <p>
                     GRADS : <span>{listgrads.grad}</span>
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Listgrads;
