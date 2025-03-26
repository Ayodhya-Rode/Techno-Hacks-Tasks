"use strict";

function btnClick() {
    const name = document.getElementById("username").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const userValid = document.getElementById("userValid");
    const mailValid = document.getElementById("mailValid");
    const form = document.querySelector("form");

    // Clear previous error messages
    userValid.innerHTML = "";
    mailValid.innerHTML = "";

    let isValid = true;

    if (name === "") {
        userValid.innerHTML = "Name is required.";
        userValid.style.color = "red";
        isValid = false;
    }

 
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    if (mail === "") {
        mailValid.innerHTML = "Email is required.";
        mailValid.style.color = "red";
        isValid = false;
    } else if (!emailPattern.test(mail)) {
        mailValid.innerHTML = "Invalid email format.";
        mailValid.style.color = "red";
        isValid = false;
    }

    if (isValid) {
        alert("Form Submitted Successfully!");
        form.reset();
    }
}
