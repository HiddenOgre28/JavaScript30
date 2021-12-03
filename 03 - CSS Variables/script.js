const spacing = document.querySelector("#spacing");
const blur = document.querySelector("#blur");
const baseColor = document.querySelector("#base");

// this is here just to what value is returned:
// const root = document.querySelector("html");
// let spacingVariable = window.getComputedStyle(root, null).getPropertyValue("--spacing");
// let blurVariable = window.getComputedStyle(root, null).getPropertyValue("--blur");
// let baseColorVariable = window.getComputedStyle(root, null).getPropertyValue("--base");

spacing.addEventListener("input", changeValue);
blur.addEventListener("input", changeValue);
baseColor.addEventListener("input", testingId)

function changeValue(e) {
    document.documentElement.style.setProperty(`--${e.target.id}`, `${e.target.value}px`);
}

function testingId(e) {
    document.documentElement.style.setProperty(`--${e.target.id}`, `${e.target.value}`);
}