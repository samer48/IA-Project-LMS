
const express = require("express");


const mysql = require('mysql');

const cors = require('cors');

const { check, validationResult } = require('express-validator');





///////////////STUDENT///////////
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({    host: "localhost",    user: "root",    password: "",    database: "signup"})
app.post('/signuup', (req, res) => {    const sql = "INSERT INTO student_login (statuss,email,password,phone,type) VALUES (?)"; 
const values = [
            req.body.statuss,
            req.body.email,
            req.body.password,
            req.body.phone,  
            req.body.type  
         ]  
db.query(sql, [values], (err, data) => {
            if(err) {
                            return res.json("Error");
                                }
                                        return res.json(data);
                                        })})
app.post('/loogin',[    check('email', "Emaill length error").isEmail().isLength({min: 10, max:30}),
    check('password', "password length 8-10").isLength({min: 8, max: 10})], (req, res) => {   
         const sql = "SELECT * FROM student_login WHERE email = ? AND password = ?";   
          db.query(sql, [req.body.email,
                         req.body.password ], (err, data) => {
        const errors = validationResult(req);
                if(!errors.isEmpty()) {            
                        return res.json(errors);        
                } else {            
                        if(err) {                
                                return res.json("Error");           
                         }            if(data.length > 0) {                
                                return res.json("Success");            
                        } else {                
                                return res.json("Faile");            
                        }        
                }            
        })})

///////////////ADMIN/////////////////////

        app.post('/signup', (req, res) => {    const sql = "INSERT INTO login (statuss,email,password,phone,type) VALUES (?)"; 
const values = [
            req.body.statuss,
            req.body.email,
            req.body.password,
            req.body.phone,  
            req.body.type  
         ]  
db.query(sql, [values], (err, data) => {
            if(err) {
                            return res.json("Error");
                                }
                                        return res.json(data);
                                        })})
app.post('/login',[    check('email', "Emaill length error").isEmail().isLength({min: 10, max:30}),
    check('password', "password length 8-10").isLength({min: 8, max: 10})], (req, res) => {   
         const sql = "SELECT * FROM login WHERE email = ? AND password = ?";   
          db.query(sql, [req.body.email,
                         req.body.password ], (err, data) => {
        const errors = validationResult(req);
                if(!errors.isEmpty()) {            
                        return res.json(errors);        
                } else {            
                        if(err) {                
                                return res.json("Error");           
                         }            if(data.length > 0) {                
                                return res.json("Success");            
                        } else {                
                                return res.json("Faile");            
                        }        
                }            
        })})
        //////////////////////////////INSTRUCTOR//////////////////////////////////
        app.post('/signup2', (req, res) => {    const sql = "INSERT INTO ins_login (statuss,email,password,phone,type) VALUES (?)"; 
const values = [
            req.body.statuss,
            req.body.email,
            req.body.password,
            req.body.phone,  
            req.body.type  
         ]  
db.query(sql, [values], (err, data) => {
            if(err) {
                            return res.json("Error");
                                }
                                        return res.json(data);
                                        })})
app.post('/login2',[    check('email', "Emaill length error").isEmail().isLength({min: 10, max:30}),
    check('password', "password length 8-10").isLength({min: 8, max: 10})], (req, res) => {   
         const sql = "SELECT * FROM ins_login WHERE email = ? AND password = ?";   
          db.query(sql, [req.body.email,
                         req.body.password ], (err, data) => {
        const errors = validationResult(req);
                if(!errors.isEmpty()) {            
                        return res.json(errors);        
                } else {            
                        if(err) {                
                                return res.json("Error");           
                         }            if(data.length > 0) {                
                                return res.json("Success");            
                        } else {                
                                return res.json("Faile");            
                        }        
                }            
        })})
        ///////////////////////////ADD INTRUCTOR FROM ADMIN///////////////

        app.post('/add_ins', (req, res) => {    const sql = "INSERT INTO ins_login (statuss,email,password,phone,type) VALUES (?)"; 
        const values = [
                    req.body.statuss,
                    req.body.email,
                    req.body.password,
                    req.body.phone,  
                    req.body.type  
                 ]  
        db.query(sql, [values], (err, data) => {
                    if(err) {
                                    return res.json("Error");
                                        }
                                                return res.json(data);
                                                })})
       
//////////////////add cources/////////////////////
app.post('/addcources', (req, res) => {    const sql = "INSERT INTO cources_table (name,code,statuss) VALUES (?)"; 
const values = [
            req.body.name,
            req.body.code,
            req.body.statuss,
           
         ]  
db.query(sql, [values], (err, data) => {
            if(err) {
                            return res.json("Error");
                                }
                                        return res.json(data);
                                        })})
/////////////list_cources//////////////////////////



app.get("/", (req, res) => {
        res.json("hello");
      });
      
      app.get("/list_cources", (req, res) => {
        const q = "SELECT * FROM cources_table";
        db.query(q, (err, data) => {
          if (err) {
            console.log(err);
            return res.json(err);
          }
          return res.json(data);
        });
      });
      
    

     
      
      
/////////////////asign courses to student/////////////////////

app.post('/reg_course', (req, res) => {    const sql = "INSERT INTO courses_student (name,code,course_name) VALUES (?)"; 
const values = [
            req.body.name,
            req.body.code,
            req.body.course_name,
           
         ]  
db.query(sql, [values], (err, data) => {
            if(err) {
                            return res.json("Error");
                                }
                                        return res.json(data);
                                        })})


///////////////list_enrolled student//////////////////////////

app.get("/", (req, res) => {
        res.json("hello");
      });
      
      app.get("/list_enrolled", (req, res) => {
        const q = "SELECT * FROM courses_student";
        db.query(q, (err, data) => {
          if (err) {
            console.log(err);
            return res.json(err);
          }
          return res.json(data);
        });
      });

/////////////add_grads////////////////////////////
app.post('/grads', (req, res) => {    const sql = "INSERT INTO grads_table (student_name,cuorse_name,grad) VALUES (?)"; 
const values = [
            req.body.student_name,
            req.body.cuorse_name,
            req.body.grad,
           
         ]  
db.query(sql, [values], (err, data) => {
            if(err) {
                            return res.json("Error");
                                }
                                        return res.json(data);
                                        })})



////////////////list_grads///////////////////
app.get("/", (req, res) => {
        res.json("hello");
      });
      
      app.get("/listgrads", (req, res) => {
        const q = "SELECT * FROM courses_student";
        db.query(q, (err, data) => {
          if (err) {
            console.log(err);
            return res.json(err);
          }
          return res.json(data);
        });
      });




///////////////////list_instructor////////////////
app.get("/", (req, res) => {
        res.json("hello");
      });
      
      app.get("/list_inst", (req, res) => {
        const q = "SELECT * FROM ins_login";
        db.query(q, (err, data) => {
          if (err) {
            console.log(err);
            return res.json(err);
          }
          return res.json(data);
        });
      });







///////////////////remove_cor////////////////
app.delete("/list_cources/:id", (req, res) => {
        const id = req.params.id;
        const q = " DELETE FROM cources_table WHERE id = ? ";
      
        db.query(q, [id], (err, data) => {
          if (err) return res.send(err);
          return res.json(data);
        });
      });


/////////////////DELETE FROM ins_login //////////////
app.delete("/list_inst/:id", (req, res) => {
        const id = req.params.id;
        const q = " DELETE FROM ins_login WHERE id = ? ";
      
        db.query(q, [id], (err, data) => {
          if (err) return res.send(err);
          return res.json(data);
        });
      });

/////////////////UPDATE_cource//////////

app.put("/list_cources/:id", (req, res) => {
        const id = req.params.id;
        const q = "UPDATE cources_table SET `name`= ?, `code`= ?, `statuss`= ? WHERE id = ?";
      
        const values = [
          req.body.name,
          req.body.code,
          req.body.statuss,
          
        ];
      
        db.query(q, [...values,id], (err, data) => {
          if (err) return res.send(err);
          return res.json(data);
        });
      });
      
///////////  UPDATE ins_login//////////////
app.put("/list_inst/:id", (req, res) => {
        const id = req.params.id;
   
        const q = "UPDATE ins_login SET `statuss`= ?, `email`= ?, `password`= ?, `phone`= ?, `type`= ? WHERE id = ?";
      
        const values = [
          req.body.statuss,
          req.body.email,
          req.body.password,
          req.body.phone,
          req.body.type,
          
        ];
      
        db.query(q, [...values,id], (err, data) => {
          if (err) return res.send(err);
          return res.json(data);
        });
      });



///////////set grads///////////
app.put("/list_enrolled/:id", (req, res) => {
        const id = req.params.id;
   
        const q = "UPDATE courses_student SET `grad`= ? WHERE id = ?";
      
        const values = [
          req.body.grad,  
       
        ];
      
        db.query(q, [...values,id], (err, data) => {
          if (err) return res.send(err);
          return res.json(data);
        });
      });

/////////assign inst///////////////

///////////////////////
app.listen(8081, ()=> {    console.log("listening");})