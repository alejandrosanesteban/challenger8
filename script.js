let openBtn = document.getElementById("open-btn");
let closeBtn = document.querySelector(".close-btn");

let content = document.querySelector(".content");
let modal = document.querySelector(".modal");

let error = document.querySelector(".error");
let modalEmail = document.getElementById("confirmed-id");



openBtn.addEventListener("click", () => {
    let email = document.querySelector(".email-input").value;
    let inputError = document.querySelector(".email-input");
    if (validateEmail(email)) {
        content.classList.add("hide");
        modal.classList.remove("hide");
        modalEmail.textContent = email;
    } else {
        error.style.display = "block";
        inputError.classList.add("input-error");
        inputError.addEventListener("keyup", () => {
            inputError.classList.remove("input-error");
        })
    }  
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("hide");
    content.classList.remove("hide");
});

function validateEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Verificar si el correo electrónico coincide con el formato esperado
    if (regex.test(email)) {
      return true; // El correo electrónico es válido
    } else {
      return false; // El correo electrónico no es válido
    }
  };
