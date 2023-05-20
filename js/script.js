let button = document.querySelector(".button");
let tekstpl = document.querySelector(".tekstpl");
let teksten = document.querySelector(".teksten");
let themeName = document.querySelector(".themeName");



button.addEventListener("click", () => {
    tekstpl.classList.toggle("ukryty")
    teksten.classList.toggle("ukryty")

    themeName.innerText = themeName.innerText === "PL" ? "EN" : "PL"
});