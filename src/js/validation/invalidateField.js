function invalidateField(input){
    input.classList.add("invalidField");

    const errorElement = input.nextElementSibling ;
    if(errorElement){
        errorElement.style.display = "block";
    }
}

export{invalidateField}