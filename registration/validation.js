function validateForm() {
    let fullname = document.getElementById('fullname').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let genderMale = document.getElementById('male').checked;
    let genderFemale = document.getElementById('female').checked;

    if (fullname === "" || fullname.length < 3) 
    {
        alert("Full name must be at least 3 characters long.");
        return false;
    }

    if (username === "" || username.length < 5) 
    {
        alert("Username must be at least 5 characters long.");
        return false;
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) 
    {
        alert("Please enter a valid email address.");
        return false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) 
    {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    if (password === "" || password.length < 6) 
    {
        alert("Password must be at least 6 characters long.");
        return false;
    }


    if (!genderMale && !genderFemale) 
    {
        alert("Please select your gender.");
        return false;
    }

    return true;
}
