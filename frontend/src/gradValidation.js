function Validation(values) {

    let error = {}

  
    if(values.student_name === "") {
    error.student_name = "student name should not be empty"
    }     
    else {        error.student_name = ""    }
    if(values.cuorse_name === "") {
        error.cuorse_name = "cuorse name should not be empty"
        }     
        else {        error.cuorse_name = ""    }
    if(values.grad === "") {
        error.grad = "grad should not be empty"
        }     
        else {        error.grad = ""    }
    
  
                           return error;
                        
                      

                        
                        }

export default Validation;