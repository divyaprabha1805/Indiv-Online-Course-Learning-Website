let currentQuestion = 0;
let score = 0;
let questions;

fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questions = data.questions;
        loadQuestion(questions[currentQuestion]);
    })
    .catch(error => console.error('Error fetching questions:', error));

function loadQuestion(question) {
    const questionElement = document.getElementById('question');
    const optionsForm = document.getElementById('options');
    const resultElement = document.getElementById('result');
    resultElement.textContent = '';

    questionElement.textContent = question.question;
    optionsForm.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.id = `option${index}`;
        optionInput.name = 'option';
        optionInput.value = option;
        
        const optionLabel = document.createElement('label');
        optionLabel.htmlFor = `option${index}`;
        optionLabel.textContent = option;

        optionsForm.appendChild(optionInput);
        optionsForm.appendChild(optionLabel);
        optionsForm.appendChild(document.createElement('br'));
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (!selectedOption) {
        alert('Please select an option.');
        return;
    }

    const selectedAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestion].correctAnswer;

    const resultElement = document.getElementById('result');

    if (selectedAnswer === correctAnswer) {
        score++;
        resultElement.innerHTML = 'Correct!';
    } else {
        resultElement.innerHTML = `Incorrect. The correct answer is: ${correctAnswer}`;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion(questions[currentQuestion]);
    } else {
        const quizElement = document.getElementById('quiz');
        quizElement.innerHTML = `<h2>Quiz Complete!</h2><p><strong>Your score: ${score}/${questions.length}</p>`;

        // Display correct answers
        questions.forEach((question, index) => {
            const correctAnswerElement = document.createElement('p');
            correctAnswerElement.innerHTML = `<strong>Question ${index + 1}:</strong> ${question.question}<br><strong>Correct Answer:</strong> ${question.correctAnswer}`;
            quizElement.appendChild(correctAnswerElement);
        });
    }
}

