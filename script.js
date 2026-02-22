// Typing Effect
const typingText = ["Web Developer", "Frontend Expert", "Freelancer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (index >= typingText.length) index = 0;

    currentText = typingText[index];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            index++;
        }
    }
    setTimeout(type, 100);
}

type();

// Project Filter
function filterProjects(category) {
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        if (category === "all") {
            project.style.display = "block";
        } else {
            project.style.display =
                project.classList.contains(category) ? "block" : "none";
        }
    });
}

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("formMessage").textContent =
        "Message sent successfully!";
});
