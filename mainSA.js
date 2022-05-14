let voir = document.querySelector(".bg");
let visu = document.querySelector("p");
voir = addEventListener("click", () => {
    if(getComputedStyle(visu).display != "none") {
        visu.style.display = none;
    } else {
        visu.style.display = initial;
    })