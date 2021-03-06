var searchHotelsBtn = document.querySelector(".search-hotels-button");
var form = document.querySelector(".search-form");
var entryInput = form.querySelector("[name=date-of-entry]");
var departureInput = form.querySelector("[name=date-of-departure]");
var adultInput = form.querySelector("[name=number-of-adults]");
var childrenInput = form.querySelector("[name=number-of-children]");

searchHotelsBtn.addEventListener("click", function(evt) {
  evt.preventDefault();

  form.classList.toggle("js-hidden");
  form.classList.remove("search-form-error");
});

form.addEventListener("submit", function(evt) {
  if (!entryInput.value || !departureInput.value || !adultInput.value || !childrenInput.value) {
    evt.preventDefault();

    form.classList.add("search-form-error");
  }
});
