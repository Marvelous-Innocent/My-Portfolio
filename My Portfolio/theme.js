const theme = document.querySelector("[data-theme]");
const themeBtn = document.querySelectorAll(".themeBtn");

const checkLocalStorageTheme = () => {
  for (let i = 0; i < themeBtn.length; i++) {
    const IconContainer = themeBtn[i].querySelector(".themeIcon");
    const LightModeIcon = IconContainer.querySelector(".lightMode");
    const DarkModeIcon = IconContainer.querySelector(".darkMode");
    const themeState = localStorage.getItem("theme");

    if (themeState === "light") {
      theme.dataset.theme = "light";

      IconContainer.style.transform = "translateX(60px) rotate(180deg)";
      LightModeIcon.classList.add("active");
      DarkModeIcon.classList.remove("active");

      return themeState;
    } else if (themeState === "dark") {
      theme.dataset.theme = "dark";

      IconContainer.style.transform = "translateX(0px) rotate(0deg)";
      LightModeIcon.classList.remove("active");
      DarkModeIcon.classList.add("active");

      return themeState;
    }
  }
};

checkLocalStorageTheme();

window.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].addEventListener("click", () => {
      const themeValue = checkLocalStorageTheme();
      console.log(themeValue);
      updateLocalStorageTheme(themeValue);
    });
  }

  const updateLocalStorageTheme = (value) => {
    for (let i = 0; i < themeBtn.length; i++) {
      const IconContainer = themeBtn[i].querySelector(".themeIcon");
      const LightModeIcon = IconContainer.querySelector(".lightMode");
      const DarkModeIcon = IconContainer.querySelector(".darkMode");

      if (value === "light") {
        localStorage.setItem("theme", "dark");
        theme.dataset.theme = "dark";
        IconContainer.style.transform = "translateX(0px) rotate(0deg)";
        LightModeIcon.classList.remove("active");
        DarkModeIcon.classList.add("active");
      } else {
        localStorage.setItem("theme", "light");
        theme.dataset.theme = "light";
        IconContainer.style.transform = "translateX(60px) rotate(180deg)";
        LightModeIcon.classList.add("active");
        DarkModeIcon.classList.remove("active");
      }
    }
  };
});
