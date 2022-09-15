const menuEl = document.querySelector('#sidebar');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", function() {
  menuEl.style.display="block";
});

closeBtn.addEventListener("click", function() {
  menuEl.style.display="none";
})