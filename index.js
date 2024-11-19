const allInputSections = document.querySelectorAll(".input-section");
const form = document.querySelector("form");
const submitButton = document.querySelector('input[type="submit"]');
const inputFields = document.querySelectorAll('input:not([type="submit"])');

const formData = {
  name: "",
  username: "",
  email: "",
  password: "",
};

for (const inputSection of allInputSections) {
  const label = inputSection.querySelector("label");
  const input = inputSection.querySelector("input");

  label.addEventListener("click", () => {
    input.focus();
  });
}

form.addEventListener("input", (event) => {
  const { name, value } = event.target;

  if (formData[name] !== undefined) {
    if (name === "name") {
      formData[name] = value;
    } else {
      formData[name] = value.trim();
    }
  }

  const isValid = isValidForm();
  console.log("Form validity:", isValid);
  submitButton.disabled = !isValid;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!isValidForm()) return;

  const registrationData = {
    name: formData.name,
    username: formData.username,
    email: formData.email,
    password: formData.password,
  };

  console.log(registrationData);
});

function isValidForm() {
  const passwordInput = document.querySelector('input[name="password"]');
  const confirmPasswordInput = document.querySelector(
    'input[name="confirm-password"]'
  );

  for (let input of inputFields) {
    if (input.value.trim() === "" || !input.checkValidity()) {
      console.log(`Invalid input: ${input.name}`);
      return false;
    }
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    console.log("Passwords do not match");
    confirmPasswordInput.setCustomValidity("Passwords do not match");
    return false;
  } else {
    confirmPasswordInput.setCustomValidity("");
  }

  return true;
}