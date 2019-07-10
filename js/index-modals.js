

//feedback modal

var writeUsBtn = document.querySelector(".write-us-btn");
var writeUs = document.querySelector(".write-us");
writeUsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUs.classList.add("modal-show");
});

var writeUsClose = document.querySelector(".write-us-close");
writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUs.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUs.classList.contains("modal-show")) {
      evt.preventDefault();
      writeUs.classList.remove("modal-show");
    }
  }
});

//map modal
var mapBtn = document.querySelector(".contacts-map");
var mapBig = document.querySelector(".map");
mapBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapBig.classList.add("modal-show");
});

var mapClose = document.querySelector(".map-close");
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapBig.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapBig.classList.contains("modal-show")) {
      evt.preventDefault();
      mapBig.classList.remove("modal-show");
    }
  }
});


