let counter = 0;

function countHandler(cnt) {
  counter += cnt ? 1 : -1;
  let text = document.querySelector(".text");
  text.innerHTML = counter;
  text.setAttribute("data-heading", counter);
}

document.querySelectorAll("button").forEach((elem) => {
  elem.addEventListener("click", (event) => {
    event.preventDefault();
    countHandler(event.target.className == "increment");
  });
});
