const messages = [
    "Beneran nih?",
    "Yakiinn ga??",
    "Kok gituu?",
    "Please...",
    "Coba pikir pikir lagi",
    "Nangis sih klo ditolak...",
    "Sedih bgt...",
    "...",
    "Ok fine...",
    "Pls bilang iyaaa ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}