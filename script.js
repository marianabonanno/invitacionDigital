// Seleccionar la fecha de destino (puedes personalizarla)
const targetDate = new Date("2025-06-28T00:00:00").getTime();

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
        document.getElementById("countdown").innerHTML = "<h2>¡Es el gran día!</h2>";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Actualizar el DOM
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

// Actualizar cada segundo
const interval = setInterval(updateCountdown, 1000);

// Inicializar
updateCountdown();

const track = document.querySelector('.carousel-track');
const images = track.innerHTML;

// Duplicar el contenido para que sea continuo
track.innerHTML += images;

const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopupBtn");

// Muestra el pop-up al hacer clic en cualquier botón con la clase `showPopupBtn`
document.querySelectorAll(".showPopupBtn").forEach(button => {
    button.addEventListener("click", () => {
        popup.style.display = "flex"; // Muestra el pop-up
    });
});

// Cierra el pop-up al hacer clic en la "X" o fuera del contenido
closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});


const popup1 = document.getElementById("popup1");
const closePopupBtn1 = document.getElementById("closePopupBtn1");

document.querySelectorAll(".showPopupBtn1").forEach(button => {
    button.addEventListener("click", () => {
        popup1.style.display = "flex"; // Muestra el pop-up
    });
});

closePopupBtn1.addEventListener("click", () => {
    popup1.style.display = "none";
});

popup1.addEventListener("click", (event) => {
    if (event.target === popup1) {
        popup1.style.display = "none";
    }
});

const popup2 = document.getElementById("popup2");
const closePopupBtn2 = document.getElementById("closePopupBtn2");

document.querySelectorAll(".showPopupBtn2").forEach(button => {
    button.addEventListener("click", () => {
        popup2.style.display = "flex"; // Muestra el pop-up
    });
});

closePopupBtn2.addEventListener("click", () => {
    popup2.style.display = "none";
});

popup2.addEventListener("click", (event) => {
    if (event.target === popup2) {
        popup2.style.display = "none";
    }
});

