const queryInputFocus = document.querySelectorAll('input[name="queryType"]');

function addQueryInputFocus(){
    queryInputFocus.forEach(input => {
    input.addEventListener("change", () => {
        document.querySelectorAll(".option").forEach(label => {
            label.classList.remove("focused");
        });
        if (input.checked) {
            input.closest(".option").classList.add("focused");
        }
    });
});
}

export{addQueryInputFocus}