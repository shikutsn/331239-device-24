var writeusButton = document.querySelector(".contacts-writeus");
var mapButton = document.querySelector(".contacts-map");

var writeusWindow = document.querySelector(".modal-writeus");
var writeusClose = writeusWindow.querySelector(".modal-close");

var mapWindow = document.querySelector(".modal-map");
var mapClose = mapWindow.querySelector(".modal-close");

var writeusForm = writeusWindow.querySelector(".writeus-form");
var nameField = writeusWindow.querySelector("[name=name]");
var emailField = writeusWindow.querySelector("[name=email]");
var letterField = writeusWindow.querySelector("[name=letter]");

var isStorageSupported = true;
var storagedName = "";
var storagedEmail = "";

try {
  storagedName = localStorage.getItem("name");
  storagedEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupported = false;
}

// ======== обработчики кликов по карте =====
mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapWindow.classList.add("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    mapWindow.classList.remove("modal-show");
  }
});

window.addEventListener("mouseup", function (evt) {
  if (evt.target.closest('.modal') === null) {
    mapWindow.classList.remove("modal-show");
  }
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapWindow.classList.remove("modal-show");
});
// =======================================


writeusButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeusWindow.classList.add("modal-show");

  if (storagedName) {
    nameField.value = storagedName;
  }
  if (storagedEmail) {
    emailField.value = storagedEmail;
  }

  if (storagedName && storagedEmail) {
    letterField.focus();
  } else if (storagedName) {
    emailField.focus();
  } else {
    nameField.focus();
  }
});

writeusForm.addEventListener("submit", function (evt) {
  if (!nameField.value || !emailField.value || !letterField.value) {
    evt.preventDefault();
    writeusWindow.classList.remove("modal-error");
    void writeusWindow.offsetWidth;
    writeusWindow.classList.add("modal-error");
    //навешиваем класс с ошибкой на поле (подкрашивание красным)
    if (!nameField.value) {
      nameField.classList.add("modal-invalid-field");
    }
    if (!emailField.value) {
      emailField.classList.add("modal-invalid-field");
    }
    if (!letterField.value) {
      letterField.classList.add("modal-invalid-field");
    }
  } else {
    if (isStorageSupported) {
      localStorage.setItem("name", nameField.value);
      localStorage.setItem("email", emailField.value);
    }
  }
});

// при фокусе каждого поля ввода убираем класс ошибки
nameField.addEventListener("focus", function (evt) {
  nameField.classList.remove("modal-invalid-field");
});

emailField.addEventListener("focus", function (evt) {
  emailField.classList.remove("modal-invalid-field");
});

letterField.addEventListener("focus", function (evt) {
  letterField.classList.remove("modal-invalid-field");
});

function closeModalWindow() {
  if (writeusWindow.classList.contains("modal-show")) {
    writeusWindow.classList.remove("modal-show");
    writeusWindow.classList.remove("modal-error");
  }
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeModalWindow();
  }
});

window.addEventListener("mouseup", function (evt) {
  if (evt.target.closest('.modal') === null) {
    closeModalWindow();
  }
});

writeusClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  closeModalWindow();
});
