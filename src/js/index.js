import { validateField } from "./validation/validateField.js";
import { invalidateField } from "./validation/invalidateField.js";
import { validateConsent } from "./validation/validateConsent.js";
import { validateEmail } from "./validation/validateEmail.js";
import { validateQueryType } from "./validation/validateQueryType.js";
import { addQueryInputFocus } from "./focus/queryInputFocus.js";

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
        messageSent.style.opacity = "1";
        setTimeout(() => {
            messageSent.style.opacity = "0";
        }, 3000);

        if (window.innerWidth < 430) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        messageSent.style.opacity = "0";
    }
});