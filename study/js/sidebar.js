const menuEl = document.querySelector('#sidebar');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

const clickHandler = function(e) {
  menuEl.style.display="block";
};

menuBtn.addEventListener("click", clickHandler);

closeBtn.addEventListener("click", function() {
  menuEl.style.display="none";
})