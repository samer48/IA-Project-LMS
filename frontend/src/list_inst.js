import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./list_inst.css";
const List_inst = () => {
   ///////////////////////////
   const handleDelete = async (id) => {
      try {
         await axios.delete(`http://localhost:8081/list_inst/${id}`);
         window.location.reload();
      } catch (err) {
         console.log(err);
      }
   };

   /////////////////////////
   const [list_inst, setlist_courcess] = useState([]);

   useEffect(() => {
      const fetchAlllist_courcess = async () => {
         try {
            const res = await axios.get("http://localhost:8081/list_inst");
            setlist_courcess(res.data);
         } catch (err) {
            console.log(err);
         }
      };
      fetchAlllist_courcess();
   }, []);

   console.log(list_inst);

   return (
      <div>
         <div className="container">
            <h1 className="fs-2 mt-5 mb-5 text-center">ALL instructor </h1>
            <div className="list_insts row justify-content-between">
               {list_inst.map((list_inst) => (
                  <div key={list_inst.id} className="list_inst col-lg-3">
                     <p>
                        email : <span>{list_inst.email}</span>
                     </p>
                     <p>
                        password : <span>{list_inst.password}</span>
                     </p>
                     <p>
                        phone : <span>{list_inst.phone}</span>
                     </p>
                     <p>
                        type : <span>{list_inst.type}</span>
                     </p>
                     <p>
                        statuss : <span>{list_inst.statuss}</span>
                     </p>
                     <div className="text-center row justify-content-evenly mt-2">
                        <button
                           className="delete btn btn-danger col-lg-3"
                           onClick={() => handleDelete(list_inst.id)}
                        >
                           Delete
                        </button>
                        <button className="update_ins  btn btn-primary col-lg-3">
                           <Link
                              to={`/update_ins/${list_inst.id}`}
                              style={{
                                 color: "inherit",
                                 textDecoration: "none",
                              }}
                           >
                              Update
                           </Link>
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default List_inst;
