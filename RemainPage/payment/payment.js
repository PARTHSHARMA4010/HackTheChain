const submitBtn = document.querySelector("#submitBtn");
const paymentSuccessMessage = document.querySelector("#paymentSuccessMessage");

submitBtn.addEventListener("click", function() {

    const utrNumber = document.querySelector("#utrNumber").value.trim();
    if (utrNumber !== "") {
   
        paymentSuccessMessage.style.display = "block";
    } else {
    }
});
