import Validator from 'Validator';
import isEmpty from 'lodash/isEmpty'


export default function validateInput(data){
    let errors={};
    if(Validator.isNull(data.identifier)){
        errors.identifier="this Field is requiered";
    }
    if(Validator.isNull(data.password)){
        errors.password="this Field is requiered";
    }

    return{
        errors,
        isValid: isEmpty(errors)
    };
        
    }
    
}