const registerForm = document.getElementById("register-form");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const apellidoInput = document.getElementById("apellido");
const telefonoInput = document.getElementById("phone");
const mensajeInput = document.getElementById("mensaje");

const users = JSON.parse(localStorage.getItem("users")) || [];

const saveLocalStorage = () => {
   localStorage.setItem("users", JSON.stringify(users));
};
console.log("Usario =>", users);
const isEmpty = (input) => {
   return !input.value.trim().length;
};
const isBetween = (input, min, max) => {
   return input.value.trim().length >= min && input.value.length <= max;
};
const isEmailValid = (input) => {
   const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
   return emailRegex.test(input.value.trim());
};
const isPhoneValid = (input) => {
   const re = /^\d{7,15}$/;
   return re.test(input.value.trim());
};
const showError = (input, msg) => {
   const formField = input.parentElement;
   formField.classList.add("error");
   console.log(formField);
   const error = formField.querySelector("small");
   error.style.display = "block";
   error.textContent = msg;
};
const showSuccess = (input) => {
   const formField = input.parentElement;
   formField.classList.remove("error");
   const error = formField.querySelector("small");
   error.style.display = "none";
   error.textContent = "";
};

const checkTextInput = (input) => {
   const min = 3;
   const max = 25;
   if (isEmpty(input)) {
      showError(input, "Este campo es obligatorio*");
      return false;
   }
   if (!isBetween(input, min, max)) {
      showError(
         input,
         `Este campo debe tener entre ${min} y ${max} caracteres`
      );
      return false;
   }
   showSuccess(input);
   return true;
};

const checkEmail = (input) => {
   if (isEmpty(input)) {
      showError(input, "Este campo es obligatorio*");
      return false;
   }
   if (!isEmailValid(input)) {
      showError(input, "El email no es valido");
      return false;
   }
   showSuccess(input);
   return true;
};
const checkPhone = (input) => {
   if (isEmpty(input)) {
      showError(input, "Este campo es obligatorio*");
      return false;
   }
   if (!isPhoneValid(input)) {
      showError(input, "El numero de telefono no existe*");
      return false;
   }
   showSuccess(input);
   return true;
};
const checkMsg = (input) => {
   if (isEmpty(input)) {
      showError(input, "Este campo es obligatorio*");
   }
};

const validateForm = (e) => {
   e.preventDefault();
   const isNameValid = checkTextInput(nombreInput);
   const isLastNameValid = checkTextInput(apellidoInput);
   const isEmailValid = checkEmail(emailInput);
   const isPhoneValid = checkPhone(telefonoInput);
   const isMsgValid = checkMsg(mensajeInput);

   const isValidForm =
      isNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isMsgValid;

   if (isValidForm) {
      const user = {
         nombre: nombreInput.value,
         Apellido: apellidoInput.value,
         Email: emailInput.value,
         Numero: telefonoInput.value,
         Mesnaje: mensajeInput.value,
      };
      users.push(user);
      saveLocalStorage(users);
      alert("mensaje enviado");
   }
};

const initt = () => {
   registerForm.addEventListener("submit", validateForm);
};

initt();
