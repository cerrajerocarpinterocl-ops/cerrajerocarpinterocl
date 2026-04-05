const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});
}

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll(".nav-links a").forEach(link => {
link.addEventListener("click", () => {
navLinks.classList.remove("active");
});
});

// FAQ
document.querySelectorAll(".faq-question").forEach(button => {
button.addEventListener("click", () => {
const item = button.parentElement;
item.classList.toggle("active");
});
});

// Año automático
document.getElementById("year").textContent = new Date().getFullYear();

// Formulario a WhatsApp
const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {
quoteForm.addEventListener("submit", function (e) {
e.preventDefault();

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const service = document.getElementById("service").value.trim();
const message = document.getElementById("message").value.trim();

const whatsappMessage = `Hola, soy ${name}. Mi teléfono es ${phone}. Necesito información sobre: ${service}. Detalle: ${message || "Sin detalle adicional"}`;

const url = `https://wa.me/56911111111?text=${encodeURIComponent(whatsappMessage)}`;
window.open(url, "_blank");
});
}

// Animaciones al hacer scroll
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("visible");
}
});
}, {
threshold: 0.15
});

revealElements.forEach(el => observer.observe(el));

