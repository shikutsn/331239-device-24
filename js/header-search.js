// форму поиска в хедере прячет и подсвечивает при фокусе
// ---------------------------------------------------------------------
var searchFormWindow = document.querySelector(".search-form");
var searchFormField = searchFormWindow.querySelector(".search-field");
var searchFormButton = searchFormWindow.querySelector(".button-search");

searchFormField.addEventListener("focus", function (evt) {
  // при фокусе показать кнопку и сделать подчеркивание
  evt.preventDefault();
  searchFormWindow.classList.add("search-form-underline");
  searchFormButton.classList.add("search-form-button-show");
});

searchFormField.addEventListener("blur", function (evt) {
  // при потере фокуса кнопку и подчеркивание убрать
  evt.preventDefault();
  if (searchFormWindow.classList.contains("search-form-underline")) {
    searchFormWindow.classList.remove("search-form-underline");
  }
  if (searchFormButton.classList.contains("search-form-button-show")) {
    searchFormButton.classList.remove("search-form-button-show");
  }
});

// searchFormField.addEventListener("focus", function (evt) {
//   // при фокусе показать кнопку и сделать подчеркивание
//   evt.preventDefault();
//   searchFormWindow.classList.add("search-form-underline");
//   searchFormButton.classList.add("search-form-button-show");
// });

// searchFormField.addEventListener("blur", function (evt) {
//   // при потере фокуса кнопку и подчеркивание убрать
//   evt.preventDefault();
//   if (searchFormWindow.classList.contains("search-form-underline")) {
//     searchFormWindow.classList.remove("search-form-underline");
//   }
//   if (searchFormButton.classList.contains("search-form-button-show")) {
//     searchFormButton.classList.remove("search-form-button-show");
//   }
// });

// searchFormButton.addEventListener("mousedown", function (evt) {
//   evt.preventDefault();
//   searchFormButton.classList.add("search-form-button-show");
// });

// searchFormButton.addEventListener("mouseup", function (evt) {
//   evt.preventDefault();
//   if (searchFormButton.classList.contains("search-form-button-show")) {
//     searchFormButton.classList.remove("search-form-button-show");
//   }
// });
// ---------------------------------------------------------------------
