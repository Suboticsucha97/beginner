let proizvodi = document.getElementById("clickone");
let laptop = document.querySelector(".objectstwo");
let pogodnosti = document.getElementById("clicktwo");
let licenca = document.querySelector(".objectsone")

proizvodi.addEventListener("click", () => {
    console.log(laptop.style.display);
    if (laptop.style.display === "none") {
        laptop.style.display = "flex";
    }
    else {
        laptop.style.display = "none";
    }
});

pogodnosti.addEventListener("click", () => {
    if (licenca.style.display === "none") {
        licenca.style.display = "flex"
    }
    else {
        licenca.style.display = "none"

    }
})