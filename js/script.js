const tabItem = document.querySelectorAll(".cars__btn");
const tabContent = document.querySelectorAll(".card__row");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});
function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove("cars__btn--active");
  });
  tabTarget.classList.add("cars__btn--active");
  tabContent.forEach(function (item) {
    item.classList.remove("card__row--active");
  });
  document.querySelector(`#${button}`).classList.add("card__row--active");
}

const menuBtn = document.querySelector(".header__btn");
const menuList = document.querySelector(".header__nav");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menuList.classList.toggle("active");
});

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
