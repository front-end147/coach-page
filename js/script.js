const barIcon = document.querySelector("#barIcon"),
      navMenu = document.querySelector(".nav_menu");
const profilePicture = document.querySelector(".profile_picture"),
      profileMenu = document.querySelector(".profile_menu");

barIcon.addEventListener("click", () => {
  barIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
});

profilePicture.addEventListener("click", () => {
  profileMenu.classList.toggle("active");
});


document.addEventListener("click", (e) => {
  if (e.target.id !== "barIcon") {
    barIcon.classList.remove("active");
    navMenu.classList.remove("active");
  }
  if (e.target.className !== "profile_picture") {
    profileMenu.classList.remove("active");
  }
});