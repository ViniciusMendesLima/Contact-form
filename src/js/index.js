import { validateField } from "./validation/validateField.js";
import { invalidateField } from "./validation/invalidateField.js";
import { validateConsent } from "./validation/validateConsent.js";
import { validateEmail } from "./validation/validateEmail.js";
import { validateQueryType } from "./validation/validateQueryType.js";
import { addQueryInputFocus } from "./focus/queryInputFocus.js";
import { clean } from "./confirmeSend/clean.js";
import {getMessage} from "./confirmeSend/getMessage.js"

const btnSend = document.getElementById("btnSend");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const message = document.getElementById("message");
const emailAddress = document.getElementById("emailAddress");

const messageSent = document.querySelector(".messageSent");

addQueryInputFocus();

btnSend.addEventListener("click", (e) => {
    e.preventDefault();

    let isValid = true;

    if (!validateField(firstName)) isValid = false;
    if (!validateField(lastName)) isValid = false;
    if (!validateField(message)) isValid = false;

    if (validateEmail(emailAddress.value)) {
        validateField(emailAddress);
    } else {
        invalidateField(emailAddress);
        isValid = false;
    }

    const queryType = document.querySelector('input[name="queryType"]:checked');
    if (!validateQueryType(queryType)) isValid = false;

    const consent = document.querySelector('input[name="consent"]:checked');
    if (!validateConsent(consent)) isValid = false;

    if (isValid) {
        clean();
        getMessage(messageSent);
    } else {
        messageSent.style.opacity = "0";
    }
});