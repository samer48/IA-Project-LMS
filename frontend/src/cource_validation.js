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
    if(values.statuss === "") {
        error.statuss = "statuss should not be empty"
        }     
        else {        error.statuss = ""    }
    
  
                           return error;
                        
                      

                        
                        }

export default Validation;