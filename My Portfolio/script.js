// Menu Bar
const navElem = document.querySelector(".menuNav");
const navList = navElem.querySelectorAll("li");
const closeBtn = document.querySelector(".closeMenuBtn");
const openBtn = document.querySelector(".openMenuBtn");

closeBtn.addEventListener("click", (e) => {
  navElem.style.transform = "translateX(100%)";
});

openBtn.addEventListener("click", (e) => {
  navElem.style.transform = "translateX(0px)";
});

navList.forEach((element) => {
  element.addEventListener("click", () => {
    navElem.style.transform = "translateX(100%)";
  });
});

// Skills Section Animation Effect
for (const card of document.querySelectorAll(".card")) {
  card.addEventListener("mousemove", (e) => {
    handleOnMouseMove(e);
  });
}

const handleOnMouseMove = (e) => {
  const { currentTarget: target } = e;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // console.log(x, y);
  target.style.setProperty("--mouse-X", `${x}px`);
  target.style.setProperty("--mouse-Y", `${y}px`);
  console.log(target.classList);
};
