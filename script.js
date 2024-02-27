// NodeList
const questions = document.querySelectorAll('section');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        question.classList.toggle('opened');
    })
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);    
    modal.style.display = "flex";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

window.onclick = function(e) {
    if (e.target.className === "modal") {
        e.target.style.display = "none";
    }
};