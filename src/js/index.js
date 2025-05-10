const btnSend = document.getElementById("btnSend");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const message = document.getElementById("message");
const emailAddress = document.getElementById("emailAddress");
const queryTypeError = document.getElementById("queryTypeError");
const errorConsent = document.querySelector(".errorConsent")
const messageSent = document.querySelector(".messageSent");

const queryInputFocus = document.querySelectorAll('input[name="queryType"]')

queryInputFocus.forEach(input =>{
    input.addEventListener("change",() =>{

        document.querySelectorAll(".option").forEach(label =>{
            label.classList.remove("focused");
        });

        if(input.checked){
            input.closest(".option").classList.add("focused");
        }
    })
})

btnSend.addEventListener("click", (e) =>{
    e.preventDefault()
    
    let isValid = true;

    if (!validadeField(firstName)) isValid = false;
    if (!validadeField(lastName)) isValid = false;
    if (!validadeField(message)) isValid = false;
        
    if(validarEmail(emailAddress.value)){
        validadeField(emailAddress)
    }else{
        invalidadeFild(emailAddress)
        isValid = false;//
    }
    const queryType = document.querySelector('input[name="queryType"]:checked');
    if (!validateQueryType(queryType)) isValid = false;

    const consent = document.querySelector('input[name="consent"]:checked');
    validadeConsent(consent)
    if (!validadeConsent(consent)) isValid = false;

    if (isValid){
        messageSent.style.opacity = "1";
    } else {
        messageSent.style.opacity = "0";
    }
})

function validadeConsent(consent) {
    if(consent){
         errorConsent.style.display = "none";
         return true

    }else{
        errorConsent.style.display = "block";
        return false

    }
}

function validateQueryType(checkedType){
    if (checkedType) {
        queryTypeError.style.display = "none";
        return true
    }else{
        queryTypeError.style.display = "block";
        return false
    }
}
function validarEmail(email) {
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regex.test(email)
}

function invalidadeFild(input){
    input.classList.add("invalidField");

    const errorElement = input.nextElementSibling ;
    if(errorElement){
        errorElement.style.display = "block";
    }
}

function validadeField(input){
    if(input.value){
        input.classList.remove("invalidField");
        const errorElement = input.nextElementSibling ;
        if(errorElement){
            errorElement.style.display = "none";
        } 
        return true
    }else{
        invalidadeFild(input)
        return false
    }
}