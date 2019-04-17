const footer = document.querySelector(".footer");
window.addEventListener("scroll", function() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    footer.classList.remove("fnon");
  } else {
    footer.classList.add("fnon");
  }
});

//not working on the deployes site