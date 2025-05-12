import {invalidateField} from "./invalidateField.js"

function validateField(inputNameOrLastName){
    if(inputNameOrLastName.value){
        inputNameOrLastName.classList.remove("invalidField");
        const errorElement = inputNameOrLastName.nextElementSibling ;
        if(errorElement){
            errorElement.style.display = "none";
        } 
        return true
    }else{
        invalidateField(inputNameOrLastName)
        return false
    }
}

export{validateField}