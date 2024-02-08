// NodeList
const questions = document.querySelectorAll('section');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        question.classList.toggle('opened');
    })
});