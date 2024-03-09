// Array degli elementi HTML
const elements = document.querySelector(".slide")

// Array dei pulsanti
const buttons = document.querySelectorAll(".slideClick");

// Funzione per aggiungere l'animazione di fade-in
function addFadeIn(element,button) {
    element.classList.add("opacity-100");
    button.classList.add("opacity-100");

}

// Funzione per aggiungere l'animazione di fade-out
function addFadeOut(element,button) {
    element.classList.add("opacity-0");
    button.classList.add("opacity-50");
}

// Funzione per rimuovere l'animazione di fade
function removeFade(element,button) {
    element.classList.remove("opacity-100");
    element.classList.remove("opacity-0");
    button.classList.remove("opacity-100");
    button.classList.remove("opacity-0");
}

// Funzione per gestire l'effetto di fade-in e fade-out per elementi e pulsanti
function toggleFade(index) {
    const fadeInElement = elements[index];
    const fadeOutElement = elements.find(i => i !== index);
    const fadeButton = buttons[index];
    const fadeOutButton = buttons.find(i => i !== index);

    addFadeIn(fadeInElement,fadeButton);
    addFadeOut(fadeOutElement),fadeOutButton;
}

// Funzione per eseguire l'animazione di fade-in e fade-out ogni 3 secondi
function fade_in_out() {
    let index = 0;
    setInterval(() => {
        // Esegui l'animazione per l'indice corrente
        toggleFade(index);
        // Incrementa l'indice per passare all'elemento successivo
        index = (index + 1) % elements.length;
    }, 3000); // Esegui ogni 3 secondi
}
fade_in_out();
// Aggiungi l'evento ai pulsanti per attivare l'animazione al click
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        toggleFade(index);
    });
});

// Avvia l'animazione
