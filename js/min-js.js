
//cart popup 
var openCart = document.querySelector(".open-cart");
var addCart = document.querySelector(".cart-add");
var cartBlock = document.querySelector(".top-navigation-cart");
openCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartBlock.classList.add("make-red");
  addCart.classList.add("modal-show");
});


var cartClose = document.querySelector(".cart-add-close");
var cartContinue = document.querySelector(".cart-add-continue");
cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addCart.classList.remove("modal-show");
});

cartContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  addCart.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (addCart.classList.contains("modal-show")) {
      evt.preventDefault();
      addCart.classList.remove("modal-show");
    }
  }
});

var bookmarks = document.querySelector(".bookmark");
var bookmarksBlock = document.querySelector(".top-navigation-bookmarks");

bookmarks.addEventListener("click", function (evt) {
  evt.preventDefault();
  bookmarksBlock.classList.add("make-red");
});

//loged-unloged 

var userLogin = document.querySelector(".user-navigation-login");
var userLoged = document.querySelector(".user-navigation-loged");
var userUnlog = document.querySelector(".deauthorisation");
var userLogMenu = document.querySelector(".user-navigation");

userLogin.addEventListener("click", function (evt) {
  evt.preventDefault();
  userLoged.classList.add("login-show");
  userLogMenu.classList.add("login-hide");
});

userUnlog.addEventListener("click", function (evt) {
  evt.preventDefault();
  userLoged.classList.remove("login-show");
  userLogMenu.classList.remove("login-hide");
});

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


