function showImg(smallImg) {
    var fullImg = document.getElementById("imgBox");
    fullImg.src = smallImg.src;
    fullImg.style.display = "block";
}


// function toggleMenu() {
//     var navMenu = document.getElementById("navMenu");
//     navMenu.classList.toggle("active");
// }




const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
document.querySelectorAll(".nav-btn").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))