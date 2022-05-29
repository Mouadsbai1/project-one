let div = document.querySelectorAll(".container div");
div.forEach((e) => {
  e.addEventListener("click", function () {
    for (let i = 0; i < div.length; i++) {
      div[i].classList.remove("active");
    }
    e.classList.add("active");
  });
});
