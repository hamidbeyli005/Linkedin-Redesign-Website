const navButton = document.getElementById("nav-button");
const li = document.querySelectorAll(".nav-link");

navButton.addEventListener("click", (e) => {
    
  if (e.target.tagName == "A") {

    li.forEach((link) => {
      link.classList.remove("active")
    });

    e.target.parentElement.classList.add("active");

  }

  if (e.target.tagName == "I") {

    li.forEach((link) => {
        link.classList.remove("active")
    });

    e.target.parentElement.parentElement.classList.add("active");

  }
});
