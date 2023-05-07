function Validation(values) {

    let error = {}

  
    if(values.name === "") {
    error.name = "name should not be empty"
    }     
    else {        error.name = ""    }
    if(values.code === "") {
        error.code = "code should not be empty"
        }     
        else {        error.code = ""    }
    if(values.course_name === "") {
        error.course_name = "course_name should not be empty"
        }     
        else {        error.course_name = ""    }
    
  
                           return error;
                        
                      

                        
                        }

export default Validation;