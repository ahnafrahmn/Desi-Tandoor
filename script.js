fetch("burgerMenu.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".burgerMenu").innerHTML = data;
    const burgerMenu = document.querySelector(".burger-menu");
    const crossBtn = document.querySelector(".burger-menu > .X");
    document.querySelector(".burger-btn").addEventListener("click", () => {
      burgerMenu.classList.add("burger-menu-show");
      crossBtn.addEventListener("click", () => {
        burgerMenu.classList.remove("burger-menu-show");
      });
    });
  });

fetch("entree.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".entree").innerHTML = data;
  });
fetch("desi-chatore.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".desi-chatore").innerHTML = data;
  });
fetch("mains-veg.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".mains-veg").innerHTML = data;
  });
fetch("mains-lamb.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".mains-lamb").innerHTML = data;
  });
fetch("mains-beef.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".mains-beef").innerHTML = data;
  });
fetch("mains-chicken.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".mains-chicken").innerHTML = data;
  });
fetch("mains-seafood.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".mains-seafood").innerHTML = data;
  });
fetch("mains-indo-chinese.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".mains-indo-chinese").innerHTML = data;
  });
fetch("tandoori-breads.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".tandoori-breads").innerHTML = data;
  });
fetch("from-the-paddy.html")
.then((response) => response.text())
  .then((data) => {
    document.querySelector('.from-the-paddy').innerHTML = data;
  });


fetch("accomp.html")
.then((response) => response.text())
  .then((data) => {
    document.querySelector('.accomp').innerHTML = data;
  });
fetch("desserts.html")
.then((response) => response.text())
  .then((data) => {
    document.querySelector('.desserts').innerHTML = data;
  });
fetch("beverages.html")
.then((response) => response.text())
  .then((data) => {
    document.querySelector('.beverages').innerHTML = data;
  });






setTimeout(function () {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
}, 2000); // 2000 milliseconds = 2 seconds
