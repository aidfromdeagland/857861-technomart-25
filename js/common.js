
//cart popup 
var openCart = document.querySelectorAll(".open-cart");
var addCart = document.querySelector(".cart-add");
var cartBlock = document.querySelector(".top-navigation-cart");
for (var i = 0; i < openCart.length; i++) {
  openCart[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    cartBlock.classList.add("make-red");
    addCart.classList.add("modal-show");
  });
}

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

var bookmarks = document.querySelectorAll(".bookmark");
var bookmarksBlock = document.querySelector(".top-navigation-bookmarks");

for (var i = 0; i < bookmarks.length; i++) {
  bookmarks[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    bookmarksBlock.classList.add("make-red");
  });
}
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
