const text = [
    "Diploma CSE Student",
    "Frontend Developer",
    "Learning JavaScript"
];

let index = 0;
let char = 0;

function type() {
    if (char < text[index].length) {
        document.getElementById("typing").innerHTML += text[index].charAt(char);
        char++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (char > 0) {
        document.getElementById("typing").innerHTML =
            text[index].substring(0, char - 1);
        char--;
        setTimeout(erase, 50);
    } else {
        index++;
        if (index >= text.length) {
            index = 0;
        }
        setTimeout(type, 300);
    }
}

window.onload = function () {
    type();
};

// Dark / Light Mode
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.onclick = function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeBtn.innerHTML = "☀️";
        } else {
            themeBtn.innerHTML = "🌙";
        }
    };
}

// Back to Top
const topButton = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Mobile Menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}
// Scroll Reveal Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show-section");
        }

    });

});

sections.forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("show");
    });
});