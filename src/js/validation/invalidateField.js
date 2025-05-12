function invalidateField(inputNameLastNameOrEmail){
    inputNameLastNameOrEmail.classList.add("invalidField");

    const errorElement = inputNameLastNameOrEmail.nextElementSibling ;
    if(errorElement){
        errorElement.style.display = "block";
    }
}

export{invalidateField}