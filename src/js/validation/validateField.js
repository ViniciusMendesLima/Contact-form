import {invalidateField} from "./invalidateField.js"

function validateField(input){
    if(input.value){
        input.classList.remove("invalidField");
        const errorElement = input.nextElementSibling ;
        if(errorElement){
            errorElement.style.display = "none";
        } 
        return true
    }else{
        invalidateField(input)
        return false
    }
}

export{validateField}