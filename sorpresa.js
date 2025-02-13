const questionText = "¿Quieres ser mi San Valentín? 💘";
const questionElement = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const responseMessage = document.getElementById("responseMessage");
const container = document.querySelector(".container");

// Agregar la imagen de la sorpresa
const surpriseImage = document.createElement("img");
surpriseImage.style.width = "10%"; // Ajusta el tamaño de la imagen
surpriseImage.style.borderRadius = "15px"; // Redondear bordes si lo deseas
surpriseImage.style.marginTop = "20px";
surpriseImage.style.display = "none"; // Al principio no visible
surpriseImage.style.position = "fixed"; // Fijar la imagen en la pantalla
surpriseImage.style.top = "25%"; // Centrar verticalmente
surpriseImage.style.left = "50%"; // Centrar horizontalmente
surpriseImage.style.transform = "translate(-50%, -50%)"; // Ajuste perfecto para centrar

// Asignar la fuente de la imagen (reemplaza 'img/sorpresa.jpg' con la ruta de tu imagen)
surpriseImage.src = "sorpresa.gif"; 

container.appendChild(surpriseImage); // Añadir la imagen al contenedor

let index = 0;
function typeQuestion() {
    if (index < questionText.length) {
        questionElement.textContent += questionText.charAt(index);
        index++;
        setTimeout(typeQuestion, 100);
    } else {
        questionElement.style.borderRight = "none";
    }
}

setTimeout(typeQuestion, 500);

yesBtn.addEventListener("click", () => {
    responseMessage.textContent = "JIJIJIJIJIJI TE AMO💗";
    responseMessage.style.display = "block";
    noBtn.style.display = "none";
    yesBtn.style.transform = "scale(1.2)";
    
    // Mostrar la imagen después de un breve retraso
    setTimeout(() => {
        surpriseImage.style.display = "block"; // Mostrar la imagen
    }, 10); // Esperar 1 segundo antes de mostrar la imagen

    // Mostrar el botón de descarga después de un breve retraso
    setTimeout(() => {
        document.getElementById("pdfDownloadLink").style.display = "block"; // Mostrar el enlace de descarga
    }, 1000); // Esperar 1 segundo antes de mostrar el enlace
});

noBtn.addEventListener("click", () => {
    responseMessage.textContent = "¿Estás segura miamor? 🥺💔";
    responseMessage.style.display = "block";
});

/* Partículas de fondo */
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 2,
        speedY: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
    };
}

for (let i = 0; i < 50; i++) {
    particles.push(createParticle());
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let particle of particles) {
        ctx.fillStyle = `rgba(255, 0, 100, ${particle.opacity})`;
        ctx.font = `${particle.size}px Arial`;
        ctx.fillText("💗", particle.x, particle.y);
        particle.y -= particle.speedY;

        if (particle.y < -10) {
            particle.y = canvas.height;
            particle.x = Math.random() * canvas.width;
        }
    }
    
    requestAnimationFrame(drawParticles);
}

drawParticles();

