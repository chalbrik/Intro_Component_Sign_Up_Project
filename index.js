document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", function () {
    if (this.value) {
      this.classList.add("has-value");
      document.getElementById(`${this.id}-comment`).hidden = true;
      this.classList.remove("value-removed");
      document.getElementById(`${this.id}-validation`).hidden = true;
    } else {
      this.classList.remove("has-value");
      this.classList.add("value-removed");
      document.getElementById(`${this.id}-comment`).hidden = false;
    }
  });
});

  document.querySelector("#email-address").addEventListener('blur', function(event) {
    if (event) {
        const isEmailValid = checkEmailInput(this.value);
        if (!isEmailValid) {
            this.classList.add("value-removed");
          document.getElementById(`${this.id}-validation`).hidden = false;
        } else {
          document.getElementById(`${this.id}-validation`).hidden = true;
        }
      }

  });

  function checkEmailInput(inputValue) {
  
    //mógłbym jeszcze skomplikować te warunki ale na razie wstawiłem taki.

  return inputValue.includes("@") && inputValue.includes(".") ? true : false;
}

