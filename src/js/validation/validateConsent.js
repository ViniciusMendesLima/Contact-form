const errorConsent = document.querySelector(".errorConsent");

function validateConsent(consent) {
    if (consent) {
        errorConsent.style.display = "none";
        return true;
    } else {
        errorConsent.style.display = "block";
        return false;
    }
}

export{validateConsent}