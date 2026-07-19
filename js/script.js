// ===============================
// Smart Lamp Login Interface
// ===============================

// Elements
const lampToggle = document.getElementById("lamp-toggle");
const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const eye = document.getElementById("showPassword");
const message = document.querySelector(".login-card p");

// ===============================
// Lamp ON / OFF
// ===============================

lampToggle.addEventListener("change", () => {

    if (lampToggle.checked) {

        message.textContent = "Please login to continue";

    } else {

        message.textContent = "Turn on the lamp to continue";

    }

});

// ===============================
// Show / Hide Password
// ===============================

eye.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        eye.textContent = "🙈";

    } else {

        password.type = "password";
        eye.textContent = "👁";

    }

});

// ===============================
// Success Popup
// ===============================

function success(name) {

    const popup = document.createElement("div");

    popup.className = "popup";

    popup.innerHTML = `
        <h3>Login Successful</h3>
        <p>Welcome, <b>${name}</b></p>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {

        popup.classList.add("show");

    }, 100);

    setTimeout(() => {

        popup.classList.remove("show");

        setTimeout(() => {

            popup.remove();

        }, 400);

    }, 2500);

}

// ===============================
// Login Validation
// ===============================

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const user = username.value.trim();
    const pass = password.value.trim();

    if(!lampToggle.checked){

        alert("Please turn ON the lamp first.");

        return;

    }

    if(user === ""){

        alert("Username cannot be empty.");

        username.focus();

        return;

    }

    if(pass === ""){

        alert("Password cannot be empty.");

        password.focus();

        return;

    }

    success(user);

    loginForm.reset();

    password.type = "password";

    eye.textContent = "👁";

    message.textContent = "Turn on the lamp to continue";

    setTimeout(() => {

        lampToggle.checked = false;

    }, 2500);

});