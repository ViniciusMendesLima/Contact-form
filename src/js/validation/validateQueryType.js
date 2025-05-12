const queryTypeError = document.getElementById("queryTypeError");

function validateQueryType(checkedType) {
    if (checkedType) {
        queryTypeError.style.display = "none";
        return true;
    } else {
        queryTypeError.style.display = "block";
        return false;
    }
}

export{validateQueryType}