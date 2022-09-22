const menuEl = document.querySelector('#sidebar');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

const clickHandler = function(e) {
  menuEl.style.display="block";
};

menuBtn.addEventListener("click", clickHandler);

closeBtn.addEventListener("click", function() {
  menuEl.style.display="none";
});


const moreBtn = document.querySelector('.more-btn');
const modalEl = document.querySelector('.modal-background');
const modalClose = document.querySelector('.modal-close-btn');

const clickHandler2 = function(e) {
  console.log(e.target)
  if(e.target.className === "more-btn") {
    modalEl.style.display = "block";
  }
};

moreBtn.addEventListener("click", clickHandler2);

modalClose.addEventListener("click", function(e) {
  console.log("e.target", e.target);
  modalEl.style.display = "none";
});