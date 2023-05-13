document.getElementById("btn-theme").addEventListener("click", () => {
  console.log("dark");
  document.getElementById("html").classList.toggle("dark");
});

const btn = document.getElementById("btn");
const validateItem = document.getElementById("validateItem");
const validPassword = document.getElementById("validateItemPassword");
const validPhone = document.getElementById("validateItemPhone");
const validLocation = document.getElementById("validateItemLocation");

class UserRegister {
  constructor(fullName, email, phone, password, location) {
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.location = location;
  }
  register() {
    const errors = this.validate();

    const registerItems = {
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      password: this.password,
      location: this.location,
    };
    if (errors.length > 0) {
      alert(`Fill in all fields correctly`);
    } else {
      alert("Congratulations, registration is successful");
    }
  }
  validateEmail() {
    const re = /\S+@\S+.\S+/;
    return re.test(this.email);
  }
  validate() {
    const errors = [];
    if (this.fullName.trim().length < 1) {
      errors.push("Errors");
      validateItem.innerHTML = "Full name must contain at least one character";
    }
    if (!this.validateEmail()) {
      errors.push("Errors");
      validateItemEmail.innerHTML = "Invalid email format";
    }
    if (this.phone.trim().length < 11) {
      errors.push("Errors");
      validPhone.innerHTML = "Phone number must contain at least 11 characters";
    }
    if (this.password.trim().length < 8) {
      errors.push("Errors");
      validPassword.style.color = "red";
    }
    if (this.location.trim().length < 1) {
      errors.push("Errors");
      validLocation.innerHTML = "Enter your location";
    }
    return errors;
  }
}

const form = document.getElementById("formItem");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const location = document.getElementById("location").value;

  const user = new UserRegister(fullName, email, phone, password, location);
  const errors = user.validate();

  user.register();
  console.log(user);

  localStorage.setItem(JSON.stringify(email), JSON.stringify(user));
});
