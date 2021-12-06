const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => addEventListener("mouseover", addTransition));

function addTransition(e) {
    e.target.classList.add("open", "open-active");
}