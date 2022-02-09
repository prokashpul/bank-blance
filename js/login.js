// logIn button click event handel

document.getElementById("login-btn").addEventListener('click', function () {
    // get user email
    const loginEmail = document.getElementById("login-email");
    const emailValue = loginEmail.value;
    console.log(emailValue)
    // get user password
    const loginPassword = document.getElementById("login-password");
    const passwordValue = loginPassword.value;

    if (emailValue == "prokashpul2@gmail.com" && passwordValue == "prokash2") {
        window.location.href = "bank.html";
    } else {
        window.alert("You are wrong input")
    }

});