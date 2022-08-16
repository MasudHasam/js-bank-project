// connect to the html button
document.getElementById("submit-btn").addEventListener("click", function () {
    // test if button working or not
    // console.log("clicked")

    // get the email input value.
    const emailInput = document.getElementById("email-input");
    const emailID = emailInput.value;
    //    get the password value.
    const passwordInput = document.getElementById("password-input");
    const password = passwordInput.value;
    if (emailID === "masud@gmail.com" && password === "bolbona") {
        window.location.href = "bank.html";
    } else {
        alert("arek bar vul password dile khobor ase.")
    }
})