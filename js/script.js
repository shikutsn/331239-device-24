var writeusButton = document.querySelector(".contacts-writeus");

var writeusWindow = document.querySelector(".modal-writeus");
var modalClose = writeusWindow.querySelector(".modal-close");

// writeus-form или просто form в querySelector ?
var writeusForm = writeusWindow.querySelector("form");
var nameField = writeusWindow.querySelector("[name=name]");
var emailField = writeusWindow.querySelector("[name=email]");
var letterField = writeusWindow.querySelector("[name=letter]");

var isStorageSupported = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupported = false;
}

writeusButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeusWindow.classList.add("modal-show");

  if (storage) {
    nameField.value = storage;
  }

  nameField.focus();
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeusWindow.classList.remove("modal-show");

  if (storage) {
    nameField = storage;
    emailField.focus();
  } else {
    nameField.focus();
  }

});

writeusForm.addEventListener("submit", function (evt) {
  if (!nameField.value || !emailField.value || !letterField.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupported) {
      localStorage.setItem("name", nameField.value);
    }
  }

});
