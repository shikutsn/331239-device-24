
  var writeus = document.querySelector(".contacts-writeus");

  var isStorageSupported = true;
  var storage = "";

  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupported = false;
  }

  writeus.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeus.classList.add("modal-show");
  });


